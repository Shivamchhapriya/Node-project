
import React,{ useEffect }  from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function UpdateProduct() {
    const navigate = useNavigate()
    const [name,setname]=useState('');
    const [category,setCategory]=useState('');
    const [price,setPrice]=useState('');
    const [company,setCompany]=useState('');
    const [image,setImage]=useState('');

    const [error , setError]=useState(false);

    const [data , setdata]=useState([])
    const params = useParams()
    // console.log(data)

   
    

    useEffect(()=>{
        getproductDetail()
    },[])

    const getproductDetail =async()=>{
        let result = await fetch(`http://localhost:5050/product/${params.id}`,{
            headers :{
                authorization:  `bearer ${JSON.parse(localStorage.getItem('Token'))}`
            }
        });
        result = await result.json()
        setImage(result.image)
        setCompany(result.company)
        setPrice(result.price)
        setCategory(result.category)
        setname(result.name)
        console.log(result.name)
    }


    const update = async()=>{
        
        // console.log(name,image,company,price,category)
        let result = await fetch(`http://localhost:5050/product/${params.id}`,{
            method:'put',
            body: JSON.stringify({ name,image,company,price,category }),

            headers: { 'Content-Type': 'application/json',
            authorization:  `bearer ${JSON.parse(localStorage.getItem('Token'))}`
        
        },
        })
        result = await result.json()
        navigate('/')

    }

    return (
        <>
        <h1>UPDATE PRODUCT</h1>
      
        {/* <button className="btn btn-primary" onClick={getdata}> getadat</button> */}
            <div class="container">
                <div class="form mt-5">
                    <div class="form-floating mb-3">
                        <input type="text"   class="form-control" id="floatingInput" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Name" />
                        <label for="floatingInput">Enter Name</label>
                   
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingPassword" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter Category" />
                        <label for="floatingPassword">category</label>

                    </div>

                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="floatingPassword" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Price" />
                        <label for="floatingPassword">Price</label>
                    
                    </div>
                   
                    <div class="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingPassword" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="Enter Company" />
                        <label for="floatingPassword">company</label>
                    
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingPassword" value={image} onChange={(e)=>setImage(e.target.value)} placeholder="Enter IMAGE" />
                        <label for="floatingPassword">IMAGE</label>
                    
                    </div>


                    <button className="btn btn-outline-primary" onClick={update}>Update Product</button>
                </div>
            </div>


        </>
    );
}

export default UpdateProduct;


