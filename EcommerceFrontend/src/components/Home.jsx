import React,{useState,useEffect} from "react";
import axios from "axios";

const Home = () => {
  const [product,setProduct]=useState([]);
  useEffect(()=>{
    axios.get('https://apiecommerce.pythonanywhere.com/api/product/')
    .then (response=> setProduct(response.data))
    .catch(error=>console.log(error));
  },[])
    return(
      <div className="container mt-3">
        {/* console.log(product); */}
        {product.map(product=>(
          
           <div className="card">
           <div className="card-body">  
            
             <h3 className="card-title">{product.p_name}</h3>
             <p className="card-text">{product.price}</p>
           </div>
           </div>     
        ))}
       
      </div>
    )
  };
  
  export default Home;
  