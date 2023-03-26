n = int(input())
l = list(map(int, input().split()))
for item in l:
    if item % 2 == 0:
        print(item, end=' ')