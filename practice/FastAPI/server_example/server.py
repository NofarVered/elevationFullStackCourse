from fastapi import FastAPI
import uvicorn
from fastapi.staticfiles import StaticFiles
import requests


app = FastAPI()


@app.get('/')
def root():
    return './static/download.jpg'


# @app.get('/')
# def root():
#     return {"message": "Someone has made a request and accessed the server. Exciting!"}


@app.get('/maps')
def maps():
    return "Here's some stuff related to maps"


@app.get('/shoobi')
def shoobi():
    return "This here is the shoobi *route*"


@app.get("/landing/{username}")
async def greet_user(username):
    return {"message": "Hi there {}".format(username)}


@app.get("/optionalParameters/")
async def query_params(name):
    return {"message": "Hi there {}".format(name)}

if __name__ == "__main__":
    app.mount("/static", StaticFiles(directory="static"), name="static")
    uvicorn.run(app, host="0.0.0.0", port=8000)
