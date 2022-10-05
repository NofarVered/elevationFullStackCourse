from fastapi import FastAPI
import uvicorn
from fastapi import Request, FastAPI, HTTPException
from utils import *


app = FastAPI()


@app.get('/')
def root():
    return {"message": "Server is up and running"}


@app.get("/words/{word}")
def get_word(word):
    try:
        item = get_item_by_word(word)
        return {"count": item["count"]}
    except HTTPException as exp:
        return {"count": 0}


@app.post('/words')
async def add_word(request: Request):
    req = await request.json()
    new_word = req["word"]
    try:
        item = increment_word(new_word)
    except HTTPException as exp:
        item = add_new_word(new_word)
    return {"text": f"Added {new_word}", "currentCount": item["count"]}


@app.post("/sentences")
async def add_sentence(request: Request):
    req = await request.json()
    sentence = req["sentence"]
    new_words = 0
    old_words = len(data)
    words_list = [word for word in sentence.split(" ")]
    # to do 4 and 5
    return {"text": f"Added {new_words} words, {old_words} already existed"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
