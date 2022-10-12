def is_palindrome(text):
    return text == text[::-1]


def is_lower(text):
    return text.islower()


def is_digits(text):
    return text.isdigit()


def is_long(text):
    return len(text) > 15


def is_empty(text):
    return text != ''


def exit_program(text=None):
    exit(0)
