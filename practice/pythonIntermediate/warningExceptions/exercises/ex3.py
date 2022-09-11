try:
    age = int(input("How old are you? "))
except ValueError as exp:
    print(exp)
