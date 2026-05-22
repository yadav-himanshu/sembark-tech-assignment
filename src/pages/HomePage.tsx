import { useEffect } from "react";
import { getAllProducts } from "../services/productService";

function HomePage(){
    useEffect(()=>{
        const fetchProducts=async()=>{
            try{
                const data=await getAllProducts();
                console.log(data);
                console.log(data[0]);
            }
            catch(error){
                console.error(error)
            }
        };
        fetchProducts();
    },[])
    return(
        <>
            <div>Home Page</div>
        </>
    );
}
export default HomePage