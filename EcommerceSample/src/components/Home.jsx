import React,{useState,useEffect} from "react";
import axios from 'axios'

const Home=()=>{
    const [product,setProduct]=useState([])
    const [view,setView]=useState(false)
    const[currentproduct,setCurrentproduct]=useState(null)
    useEffect(()=>{
        axios.get('https://apiecommerce.pythonanywhere.com/api/product/')
            .then(response=>setProduct(response.data))
            .catch(error => console.log(error))
    },[])
    ;
    const view_p=(product1)=>{
        setView(true)
        setCurrentproduct(product1)
        
    }

    return (
        <div className="container mt-3">
            <div className="row" id="a1">
            {product.map(product1=>(
                <div className="col-lg-3 col-md-3 col-sm-6" key={product1.id} >
                    <div className="card"onClick={()=>{view_p(product1)}}>
                        <img className="card-img-top img-fluid" src={product1.image} alt="product image" />
                        <div className="card-body">
                            <h4 className="card-little">{product1.p_name}</h4>
                            <h6 className="card-text">₹{product1.price}</h6>
                        </div>
                    </div>
                </div>
            ))}
                
            </div>
            {view ?(
                <ViewProduct
                currentproduct={currentproduct}
                />
            ):null}
        </div>
    )
 
}
const ViewProduct=(currentproducts)=>{
    const[product,setProduct]=useState(currentproducts)
    document.getElementById("a1").style.display="none"
    return(
        <div>
            <h2>{product.currentproduct.p_name}</h2>
            <img src={product.currentproduct.image}alt=""/>
        </div>
    )
}


export default Home