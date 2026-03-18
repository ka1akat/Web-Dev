n = int(input())
rev = 0
for i in range(len(n)):
    digit = n % 10
    rev = rev*10 + digit
    n = n//10
print(rev)


