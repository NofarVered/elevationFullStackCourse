class CircleIter:
    def __init__(self, iterable, cnt):
        self.iterable = iterable
        self.cnt = cnt

    def __iter__(self):
        self.start = 0
        return self

    def __next__(self):
        length = len(self.iterable)
        if self.start < self.cnt:
            place = self.start % length
            self.start += 1
            return self.iterable[place]
        else:
            raise StopIteration


# for x in CircleIter([1, 2], 5):
#     print(x, end=" ")

for x in CircleIter([1, 2, 3], 4):
    print(x, end=" ")
    for y in CircleIter([5, 6], 3):
        print(y, end=" ")
    print("\n")
