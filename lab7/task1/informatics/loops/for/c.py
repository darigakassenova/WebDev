import math
a = int(input())
b = int(input())
for i in range(a, b + 1):
    c = int(math.sqrt(i))
    if c**2 == i:
        print(i, end=' ')