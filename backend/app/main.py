from fastapi import FastAPI
from routers import product_router

app = FastAPI(title="Business Inventory API")

app.include_router(product_router.router)

@app.get("/")
def root():
    return {"message": "Bienvenido a la API de Inventario 🚀"}