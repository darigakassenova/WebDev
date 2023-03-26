n = int(input())
def is_prime(n):
    for item in range(2, n):
        if n % item == 0:
            return False
    return True
res = is_prime(n)
if res:
    print("prime")
else:
    print("composite")