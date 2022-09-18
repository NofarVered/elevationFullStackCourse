from fastapi import FastAPI
import uvicorn
from store import *
from store_utils import *

DISCOUNT = 0.5

app = FastAPI()


@app.get("/")
def route():
    return "Server is running"


@app.get("/price/{name}")
async def price_handler(name):
    try:
        item = get_by_name(name)
        return {"price": item["price"]}
    except Exception as exp:
        return {"price": None}


@app.get("/buy/{name}")
def buy_handler(name):
    try:
        item = get_by_name(name)
        item["inventory"] -= 1
        return {"name": item["name"], "inventory": item["inventory"]}
    except Exception as exp:
        return {"name": None, "inventory": None}


@app.get("/sale")
def sale_handler(admin):
    if admin == "true":
        for item in store:
            if item["inventory"] >= 10:
                item["price"] *= DISCOUNT
    return store


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
