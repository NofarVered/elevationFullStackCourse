def find_index(items, item):
    for index, value in enumerate(items):
        if value == item:
            return index
        return -1


list_iterator = iter([])
try:
    print(next(list_iterator))
except StopIteration as e:
    print("no more items")
