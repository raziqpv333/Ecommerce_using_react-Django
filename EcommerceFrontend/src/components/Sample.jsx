import React,{useState,useEffect} from "react";
import axios from "axios";

const Sample = () => {
  const [product,setProduct]=useState([]);
  useEffect(()=>{
    axios.get('https://apiecommerce.pythonanywhere.com/api/product/')
    .then(response=> setProduct(response.data))
    .catch(error=>console.log(error));
  },[])
    return(
        <div>
          <h1>{product}</h1>

        </div>
       
    )
  };
  
  export default Sample;