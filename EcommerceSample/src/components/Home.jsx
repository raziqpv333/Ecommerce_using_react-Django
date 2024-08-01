import React,{useState,useEffect} from "react";
import axios from 'axios'

const Home=()=>{
    const [product,setProduct]=useState([])
    useEffect(()=>{
        axios.get('https://apiecommerce.pythonanywhere.com/api/product/')
            .then(response=>setProduct(response.data))
            .catch(error => console.log(error))
    },[])
    console.log(product);



    return (
        <div className="container mt-3">
            <div className="row">
            {product.map(product1=>(
                <div className="col-lg-3 col-md-3 col-sm-6" key={product1.id} >
                    <div className="card">
                        <img className="card-img-top img-fluid" src={product1.image} alt="product image" />
                        <div className="card-body">
                            <h4 className="card-little">{product1.p_name}</h4>
                            <h6 className="card-text">₹{product1.price}</h6>
                        </div>
                    </div>
                </div>
            ))}

            </div>
        </div>
    )
 
}



export default Home