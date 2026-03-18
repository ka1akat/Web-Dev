n = int(input())
arr = list(map(int,input().split()))
cnt = 0
i = 0
for i in range(n):
    if i == 0:
        continue
    elif i == n-1:
        break
    else:
        if arr[i]>arr[i-1] and arr[i]>arr[i+1]:
            cnt +=1
    i+=1
print(cnt)
