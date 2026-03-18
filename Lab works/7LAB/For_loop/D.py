n = int(input())
k = int(input())
cnt1 = 1
cnt2 = 1
cnt3 = 1
for i in range(1,n+1):
    cnt1 = i * cnt1
for i in range(1,k+1):
    cnt2 = i * cnt2
m = n-k
for i in range(1,m+1):
    cnt3 = i * cnt3
C = (cnt1)//(cnt2*cnt3)
print(C)