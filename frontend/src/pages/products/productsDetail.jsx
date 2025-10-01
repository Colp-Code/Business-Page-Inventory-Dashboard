import { useParams } from "react-router-dom";
import './products.css'

const ProductsDetail= () =>{
    const { id } = useParams();
    return(
        <>
            <div className="header-product">
                <p>producto {id} </p>
            </div>
        </>
    )
}

export default ProductsDetail;