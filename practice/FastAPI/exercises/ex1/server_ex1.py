from fastapi import FastAPI
import uvicorn
from fastapi.staticfiles import StaticFiles
import requests

app = FastAPI()


@app.get('/')
def root():
    return './static/download.jpg'


@app.get('/sanity')
def sanity():
    return "Server is up and running smoothly"


if __name__ == "__main__":
    app.mount("/static", StaticFiles(directory="static"), name="static")
    uvicorn.run(app, host="0.0.0.0", port=8000)
