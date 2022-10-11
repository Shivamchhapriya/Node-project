const express = require('express');
require('./config')
const cors = require('cors')
const User = require("./user")
const Product = require('./Product');
const { deleteOne } = require('./user');
const app = express();
app.use(express.json())
app.use(cors());
let jwt = require('jsonwebtoken');
const e = require('express');
var jswkey = 'e-comm'


app.post("/register", async (req, res) => {
    let user = new User(req.body);

    let result = await user.save();
    result = result.toObject();
    delete result.password

    jwt.sign({ result }, jswkey, { expiresIn: '1h' }, (err, token)=> {
            if(err){
                res.send({result:"something is wrong"})
            }else{
                res.send({result ,auth:token})
            }
      });


})

app.post("/login", async (req, res) => {
    console.log(req.body)

    if (req.body.password && req.body.email) {

        let user = await User.findOne(req.body)
        if (user) {
          jwt.sign({user}, jswkey, { expiresIn: '1h' },(err,token)=>{
                    if(err){
                        
                    res.send({ result: 'something is not found' })
                    }else{
                        res.send({user,auth:token});
                    }
            });
              
            // res.send(user)
        } else {
            res.send({ result: 'no user found' })

        }
    }
})

app.post("/add-product",verifyTokens, async (req, res) => {

    let product = new Product(req.body);

    let result = await product.save();
    res.send(result)

})



app.get("/products",verifyTokens, async (req, res) => {
    let products = await Product.find();
    if (products.length > 0) {
        res.send(products)
    } else {
        res.send({ result: 'No data found' })
    }
})

app.delete("/product/:id",verifyTokens, async (req, res) => {
    const result = await Product.deleteOne({ _id: req.params.id })
    res.send(result)

})

app.get("/product/:id", verifyTokens, async (req, res) => {
    const result = await Product.findOne({ _id: req.params.id })
    result = res.send(result)
    if (result) {
        res.send(result)
    } else {
        res.send({ result: 'Data not found' })
    }
})

app.put("/product/:id", verifyTokens, async (req, res) => {
    let result = await Product.updateOne(
        { _id: req.params.id },
        {
            $set: req.body

        },

    )
    res.send(result)

})

// app.get("/search/:key", async (req, res) => {
//     let result = await Product.find({
//         "$or": [
//             { name: { $regex: req.params.key } },
//             {}
//         ]

//     })
//     if (result) {
//         res.send(result)
//     } else {
//         res.send({ result: "Data not found" })
//     }


// })

app.get("/search/:key", verifyTokens, async(req,res)=>{
    let result = await Product.find({
        "$or":[
            { name: { $regex: req.params.key }},
            { company: { $regex: req.params.key }}
        ]
    })
    res.send(result)
    console.log(result)
})



function verifyTokens(req,res,next){
    let token = req.headers['authorization']


if(token){
    token=token.split(" ")[1];
    jwt.verify(token,jswkey,(err,valid)=>{
        if(err){
            res.send({result:'Please provide valid token' })
        }else{
          next();

        }
    })
}else{
            res.send({result:'please add token '})

}
console.log('middleware',token)    
}

app.listen(5050);
console.log("start")