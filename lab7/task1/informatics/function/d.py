x,y,z = map(int, input().split())
def election(x,y,z):
    l = [x,y,z]
    cnt = 0
    for i in l:
        if i == 1:
            cnt += 1
    if cnt >= 2:
        return 1
    else:
        return 0
res = election(x,y,z)
print(res)