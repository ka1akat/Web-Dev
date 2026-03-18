import math
n = int(input())
i = 1
while i < n:
    if( int(math.sqrt(i)) ** 2 == i ):
        print(i)
    i = i+1

