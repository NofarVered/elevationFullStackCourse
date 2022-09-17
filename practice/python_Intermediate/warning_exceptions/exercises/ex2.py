def get_list_element(my_list, index):
    try:
        print(my_list[index])
    except IndexError as exp:
        print(f'Error is {exp} ')


get_list_element([1, 2, 3], 6)
