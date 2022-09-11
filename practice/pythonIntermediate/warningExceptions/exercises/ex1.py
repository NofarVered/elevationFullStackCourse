import math

try:
    dividend = float(input("Enter the dividend: "))
    divisor = float(input("Enter the divisor: "))
    quotient = dividend/divisor
    print(math.floor(quotient))
except Exception as exp:
    print(f'Error is {exp}')
