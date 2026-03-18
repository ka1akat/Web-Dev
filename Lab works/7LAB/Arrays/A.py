n = int(input())
arr = []
for i in range(0,n):
    a = int(input())
    arr.append(a)
    
for i in range(0,n,2):
    print(arr[i], end=" ")
