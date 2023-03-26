import math
n = int(input())
i = 1
while i <= n:
    c = int(math.sqrt(i))
    if c * c == i:
        print(i)
    i += 1