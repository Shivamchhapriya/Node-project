
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function AddProduct() {
    const [name,setname]=useState('');
    const [category,setCategory]=useState('');
    const [price,setPrice]=useState('');
    const [user,setUser]=useState('');
    const [company,setCompany]=useState('');
    const [image,setImage]=useState('');

    const [error , setError]=useState(false);

    const [data , setdata]=useState([])
    const navigate = useNavigate()
    // console.log(data)

    const addProduct = async()=>{
        console.log(!name)
        if(!name || !category || !price || !user || !company){
            setError(true)
            return false
        }
        // console.log(name,Category,Price,User,company)
        const userId = JSON.parse(localStorage.getItem('user'))._id;
       
   let result =await fetch('http://localhost:5050/add-product', {
    
  method: 'POST', 
  body: JSON.stringify({name,category,price,user,company,userId,image}),
    
  headers: {
    'Content-Type': 'application/json',
    authorization:  `bearer ${JSON.parse(localStorage.getItem('Token'))}`

  },
});

result = await result.json();
console.log(result)
navigate("/")

    }
  




    return (
        <>
        {/* <button className="btn btn-primary" onClick={getdata}> getadat</button> */}
            <div class="container">
                <div class="form mt-5">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" onChange={(e)=>setname(e.target.value)} placeholder="Name" />
                        <label for="floatingInput">Enter Name</label>
                   
                        {error && !name && <span className="invalid mt-4">Enter valid name</span>}
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingPassword" onChange={(e)=>setCategory(e.target.value)} placeholder="Enter Category" />
                        <label for="floatingPassword">category</label>
                       {error && !category &&<span className="invalid">Enter valid category</span>}

                    </div>

                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="floatingPassword" onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Price" />
                        <label for="floatingPassword">Price</label>
                        {error && !price &&<span className="invalid mt-4">Enter valid price</span>}
                    
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingPassword" onChange={(e)=>setUser(e.target.value)} placeholder="Enter UserId" />
                        <label for="floatingPassword">User Id</label>
                        {error && !user &&<span className="invalid mt-4">Enter valid User</span>}
                   
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingPassword" onChange={(e)=>setCompany(e.target.value)} placeholder="Enter Company" />
                        <label for="floatingPassword">company</label>
                        {error && !company &&<span className="invalid mt-4">Enter valid company</span>}
                    
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingPassword" onChange={(e)=>setImage(e.target.value)} placeholder="Enter IMAGE" />
                        <label for="floatingPassword">IMAGE</label>
                        {error && !image &&<span className="invalid mt-4">Enter valid Image</span>}
                    
                    </div>


                    <button className="btn btn-outline-primary" onClick={addProduct}>Add Product</button>
                </div>
            </div>


        </>
    );
}

export default AddProduct;

