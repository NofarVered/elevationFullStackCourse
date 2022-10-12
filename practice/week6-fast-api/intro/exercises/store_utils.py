from store import *


def get_by_name(name):
    for item in store:
        if item["name"] == name:
            return item
    raise Exception("Sorry, no item with that name")
