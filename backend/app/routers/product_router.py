from fastapi import APIRouter
from models.product_model import Product

router = APIRouter(prefix="/product", tags=["Products"])

product_db = []

@router.post("/")
def create_product(product: Product):
    product_db.append(product)
    return {"message": "Producto creado con éxito", "data": product}