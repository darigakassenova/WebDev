n = int(input())
l = list(map(int, input().split()))
cnt = 0
for item in l:
    if item > 0:
        cnt += 1
print(cnt)