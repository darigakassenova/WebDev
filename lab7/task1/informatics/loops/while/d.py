n = int(input())
if n == 0:
    print("NO")
while n > 1:
    if n % 2 != 0:
        print("NO")
        exit()
    n /= 2
print("YES")