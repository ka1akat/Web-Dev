n = int(input())
cnt = 1
if n!=1:
    while cnt < n:
        cnt = cnt * 2
if cnt == n:
    print("YES")
else:
    print("NO")