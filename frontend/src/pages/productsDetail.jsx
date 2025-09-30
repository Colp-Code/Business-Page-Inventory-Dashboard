import { useParams } from "react-router-dom";
 export default function ProductsDetail() {
    const { id } = useParams();
    return <p> detalle del producto {id}</p>
}