def get_word_value(message):
    return sum([ord(c)-96 for c in message])


print(get_word_value("day"))    # 4 + 1 + 25 = 30
