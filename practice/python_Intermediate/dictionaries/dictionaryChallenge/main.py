MAX_LENGTH = 15


def is_palindrome(text):
    return text == text[::-1]


def is_lower(text):
    return text.islower()


def is_digits(text):
    return text.isdigit()


def is_long(text):
    return len(text) > MAX_LENGTH


def is_empty(text):
    return text != ''


def exit_program(text=None):
    exit(0)


def starts_with_a(text):
    return text.startswith("a")


operations = {
    "1": {
        "command": "Palindrome: Check if the input is palindrome",
        "func": is_palindrome
    },
    "2": {
        "command": "Lower: Check if all characters in the input are lowercase",
        "func": is_lower
    },
    "3": {
        "command": "Digit: Check if all characters in the input are digits",
        "func": is_digits
    },
    "4": {
        "command": f"Long: Check if the input length is longer than {MAX_LENGTH}",
        "func": is_long
    },
    "5": {
        "command": "Empty: Check if the input is empty",
        "func": is_empty
    },
    "6": {
        "command": "Exit: Exit successfully from the application",
        "func": exit_program
    }
}


def menu(operations):
    print("The available operations are:")
    for operation_id, operation in operations.items():
        print(operation_id, "-", operation["command"])


def app():
    while True:
        menu(operations)
        user_operation = input(
            "Enter the number of the operation: ")
        user_input = input("Enter an input: ")
        result = operations[user_operation]["func"](user_input)
        print("The answer is: ", result)


app()
