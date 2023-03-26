a,b,c,d = map(int, input().split())
def min(a, b, c, d):
    l = [a, b, c, d]
    res = 999999
    for i in l:
        if i < res:
            res = i
    return res
res = min(a,b,c,d)
print(res)