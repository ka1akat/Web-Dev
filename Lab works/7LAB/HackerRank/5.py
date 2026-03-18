n = int(input())
arr = list(map(int, input().split()))
arr.sort()
arr.reverse()
max = arr[0]
for i in range(len(arr)):
    if arr[i]!=max:
        print(arr[i])
        break

