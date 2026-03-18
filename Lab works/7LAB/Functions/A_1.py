def min4(arr):
    m = arr[0]
    for i in range(0,4):
        if arr[0]<m:
            m = arr[0]
    return m

arr = list(map(int, input().split()))
print(min4(arr))
