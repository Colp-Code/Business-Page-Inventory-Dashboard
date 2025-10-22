from fastapi import FastAPI

app = FastAPI(title="Business Inventory API")

@app.get("/")
def read_root():
    return {"message": "Bienvenido a la API de Inventario 🚀"}