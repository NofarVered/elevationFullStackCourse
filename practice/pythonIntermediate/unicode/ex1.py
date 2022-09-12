from unittest import result


def to_upper(str):
    return ''.join([chr(ord(letter)-32) if letter.islower()
                    else letter for letter in str])


print(to_upper("AbC12$"))
