def my_accumulate(iterable):
    sum = 0
    for element in iterable:
        sum += element
        yield sum


for elem in my_accumulate([1, 2, 3, 4, 5]):
    print(elem)
