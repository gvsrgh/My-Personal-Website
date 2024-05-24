while True:
    print("Input1: ")
    a = int(input())
    print("Input2: ")
    b = int(input())
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Exit")
    print("Select operation: ")
    c = int(input())
    if c == 1:
        print(a+b)
    elif c == 2:
        print(a-b)
    elif c == 3:
        print(a*b)
    elif c == 4:
        print(a/b)
    elif c == 5:
        break