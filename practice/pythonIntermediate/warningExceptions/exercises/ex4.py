def divide(x, y):
    try:
        print(f'{x}/{y} is {x / y}')
    except ZeroDivisionError as e:
        print(e)
    except TypeError as e:
        print(e)


divide(4, 0)  # ZeroDivisionError
divide(4, 'c')  # TypeError
