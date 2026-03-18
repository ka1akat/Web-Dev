def Xor(a,b):
    answer = False
    if a == 1 and b == 1:
        answer = False
    elif a == 1 or b == 1:
        answer = True
    else:
        return False
    return answer
a , b = map(int, input().split())
if(Xor(a,b)):
    print("1")
else:
    print("0")
