def decode(messeage):
    lst_messeage = list(messeage.split(" "))
    result = ""
    for s in lst_messeage:
        result += chr(int(s))
    return result


def encode(messeage):
    return ' '.join([str(ord(c)) for c in messeage])


print(decode("72 101 108 108 111"))   # "Hello"
print(encode("Hello"))        # "72 101 108 108 111"
