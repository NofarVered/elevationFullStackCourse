def my_enumerate(iterable, start=0):
    for i in range(0, len(iterable)):
        yield iterable[i], i+start
        start += 1


for index, elem in my_enumerate([10, 20, 30, 40]):
    print(index, elem)

for index, elem in my_enumerate([10, 20, 30, 40], 10):
    print(index, elem)
