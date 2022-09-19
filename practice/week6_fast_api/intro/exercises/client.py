import requests
import sched
import time


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


def chair_for_less(s, previos_price):
    price = get_price("chair")["price"]
    if previos_price != None and price < previos_price:
        requests.get("http://localhost:8000/buy/chair").json()
        print("bought a chair for less")
    else:
        print("still waiting for a price drop...")
        s.enter(3, 1, chair_for_less, (s, None))


s = sched.scheduler(time.time, time.sleep)
s.enter(3, 1, chair_for_less, (s, None))
s.run()
