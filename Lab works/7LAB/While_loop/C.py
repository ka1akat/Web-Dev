import math
n = int(input())
i = 1
cnt = 1
while i<n:
    cnt = cnt*2
    if cnt<n:
        print(cnt, end=" ")
    i +=1