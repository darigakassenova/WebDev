a = int(input())
b = int(input())
c = int(input())
d = int(input())
for item in range(a, b+1):
    if item % c == d:
        print(item, end=" ")