n = int(input())
l = list(map(int, input().split()))
cnt = 0
for i in range(len(l)-1):
    if (l[i]>0 and l[i+1]>0) or (l[i]<0 and l[i+1]<0):
        cnt += 1
if cnt == 0:
    print("NO")
else:
    print("YES")