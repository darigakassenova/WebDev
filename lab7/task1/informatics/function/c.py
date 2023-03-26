a,b = map(int, input().split())
def xor(a, b):
    if a==b:
        return 0
    return 1
res = xor(a, b)
print(res)