import functions as f

operations = {
    "1": {
        "command": "Palindrome: Check if the input is palindrome",
        "func": f.is_palindrome
    },
    "2": {
        "command": "Lower: Check if all characters in the input are lowercase",
        "func": f.is_lower
    },
    "3": {
        "command": "Digit: Check if all characters in the input are digits",
        "func": f.is_digits
    },
    "4": {
        "command": "Long: Check if the input length is longer than 15",
        "func": f.is_long
    },
    "5": {
        "command": "Empty: Check if the input is empty",
        "func": f.is_empty
    },
    "6": {
        "command": "Exit: Exit successfully from the application",
        "func": f.exit_program
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
