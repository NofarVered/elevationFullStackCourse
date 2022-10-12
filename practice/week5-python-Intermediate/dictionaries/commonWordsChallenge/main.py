from collections import Counter


def get_5common(line):
    return Counter(line.split()).most_common(5)


line = "wee wee goo koo goo doo doo so go go yo yo yo yo fo zo"
print(get_5common(line))
