n = int(input())
arr = list(map(int, input().split()))
i = 0
cnt = 0
while i < n:
    if arr[i]>0:
        cnt+=1
    i +=1
print(cnt)