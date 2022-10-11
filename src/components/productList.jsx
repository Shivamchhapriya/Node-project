import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ProductList() {
    const [product, setproducts] = useState([]);
    // const [searchs, setSearch] = useState([]);



    useEffect(() => {
        getProducts()
        
    }, [])
    const getProducts = async () => {
        let result = await fetch("http://localhost:5050/products",{
       
       headers :{
                authorization:  `bearer ${JSON.parse(localStorage.getItem('Token'))}`
            }
        });
       
        result = await result.json();
        setproducts(result)
    }




    const deletebtn = async (id) => {
        let deleteData = await fetch(`http://localhost:5050/product/${id}`, {
            method: 'delete',
            headers :{
                authorization:  `bearer ${JSON.parse(localStorage.getItem('Token'))}`
            }
        })

        deleteData = await deleteData.json();
        if (deleteData) {
            getProducts()
        }
    }

    const search= async(e)=>{
        if(e){
            let search = await fetch(`http://localhost:5050/search/${e}`,{
                headers :{
                    authorization:  `bearer ${JSON.parse(localStorage.getItem('Token'))}`
                }
            })
            search= await search.json();
            if(search){
                setproducts(search)
            }
        }else{
            getProducts()

        }
      
        }
        


    return (
        <>
            <div className="bg-dark w-100 " style={{ height: "100%    " }}>
                <h1>product list</h1>


                <div class="searchInputWrapper mx-5=4 mb-2">
                    <input class="searchInput" onChange={(e)=>search(e.target.value)} type="text" placeholder='search Product data' />

                </div>


                <div className="row">
                 {product.length > 0 ?  product.map((dt) =>
                        <>

                            <div class="card col-3 mx-5 mt-2 bg-info" style={{ width: "18rem" }}>
                                <img src={dt.image} class="card-img-top w-100 h-100" alt="..." />
                                <div class="card-body">
                                    <h5>Company :{dt.company}</h5>

                                    <h5 class="card-title">NAME : {dt.name}</h5>

                                    <p class="card-text">Category :{dt.category}</p>
                                    <p class="">Price : {dt.price}</p>
                                    <button className="btn btn-outline-danger" onClick={(e) => deletebtn(dt._id)}>Delete</button>
                                    <button className="btn btn-outline-primary mx-3"><Link to={`/update/${dt._id}`} className="text-white"> Update</Link></button>
                                </div>
                            </div>

                        </>
                    ): <center> <h1 className="text-white">No result Found</h1></center>
                 }
                </div>
            </div>

        </>
    );
}

export default ProductList;
