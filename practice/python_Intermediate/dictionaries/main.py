# 4. Spot Check
fridge = {
    "milk": 1,
    "bananas": 4,
    "juice": 2
}
if fridge["milk"] == 1:
    print("There is one bottle of milk left")
else:
    print("There are " + str(fridge["milk"]) + " bottles of milk left")

#
closet = {
    "shirts": {
        "blue": 4,
        "black": 1,
        "white": 13,
        "flamingo-pink": 2
    },
    "pants": {
        "shorts": {
            "purple": 1,
            "red": 2,
            "flamingo-pink": 3
        },
        "jeans": {
            "denim": 8,
            "organic": 1
        }
    },
    "jackets": {}
}

# 1. 3 shirts, pants, jackets

# 2.
print(closet["shirts"]["white"])

# 3.
print(closet["pants"]["shorts"]["flamingo-pink"])

# 4.
closet["pants"]["jeans"]["organic"] = 7

# 5.
closet["pants"]["jeans"]["denim"] -= 4

# 6.
pink_shorts = closet["pants"]["shorts"]["flamingo-pink"]
pink_shirts = closet["shirts"]["flamingo-pink"]
if pink_shirts > pink_shorts:
    print("top")
else:
    print("bottom")

# 12. Spot Check
def get_squares_dictionary(n):
    return {x: x ** 2 for x in range(1, n + 1)}
print(get_squares_dictionary(5))