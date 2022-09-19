import requests


def get_price():
    user_input = input("pick a furniture by his name:")
    res = requests.get('http://localhost:8000/price/{}'.format(user_input))
    return res.json()


def buy_item(self, user_input=None):
    user_input = input("pick a furniture by his name:")
    res = requests.get(
        'http://localhost:8000/buy/{}'.format(user_input)).json()
    if res["inventory"] != None:
        print(
            "Congratulations, you've just bought {0}. There are {1} left now in the store".format(res["name"], res["inventory"]))
    return res
