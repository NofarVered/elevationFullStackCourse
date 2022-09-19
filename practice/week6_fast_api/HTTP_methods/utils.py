from data_words import words as data
from fastapi import FastAPI, HTTPException


def get_item_by_word(word):
    for item in data:
        if item["word"] == word:
            return item
    raise HTTPException(status_code=404, detail="Item not found")


def add_new_word(word):
    item = {"word": word,
            "count": 1
            }
    data.append(item)
    return item


def increment_word(word):
    item = get_item_by_word(word)
    item["count"] += 1
    return item
