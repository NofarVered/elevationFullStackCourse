from typing import Union
from fastapi import Depends, FastAPI
import uvicorn

app = FastAPI()
# http://localhost:8000/users


async def common_parameters(q: Union[str, None] = None, skip: int = 0, limit: int = 100):
    return {"q": q, "skip": skip, "limit": limit}


@app.get("/items")
async def read_items(commons: dict = Depends(common_parameters)):
    print(dict)
    return commons


@app.get("/users")
async def read_items(commons: dict = Depends(common_parameters)):
    return commons

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000, log_level="info")
