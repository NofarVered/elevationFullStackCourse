import requests


def get_price():
    user_input = input("pick a furniture by his name:")
    res = requests.get('http://localhost:8000/price/{}'.format(user_input))
    return res.json()


def buy_item(self, user_input=None):
    user_input = input("pick a furniture by his name:")
    res = requests.get(
        'http://localhost:8000/buy/{}'.format(user_input)).json()
    item_name = res["name"]
    item_inventroy = res["inventory"]
    if item_inventroy != None:
        print(
            f"Congratulations, you've just bought {item_name}. There are {item_inventroy} left now in the store")
    return res
