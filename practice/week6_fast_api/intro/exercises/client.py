import requests


def get_price(furniture):
    res = requests.get('http://localhost:8000/price/{}'.format(furniture))
    return res.json()


def buy_item(furniture):
    res = requests.get(
        'http://localhost:8000/buy/{}'.format(furniture)).json()
    if res["inventory"] != None:
        print(
            "Congratulations, you've just bought {name}. There are {inventory} left now in the store".format(name=res["name"], inventory=res["inventory"]))
    return res


def customer_process(money=0):
    furniture = input("pick a furniture by his name:")
    price = get_price(furniture)["price"]
    if price == None or money < int(price):
        raise Exception("Sorry, an error occurred")
    buy_item(furniture)
