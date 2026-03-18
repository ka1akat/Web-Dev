lst = []
n = int(input())
for i in range(n):
    curr = input().split()
    if curr[0] == "insert":
        lst.insert(int(curr[1]), int(curr[0]))
    elif curr[0] == "append":
        lst.append(int(curr[1])) 
    elif curr[0] == "remove":
        lst.remove(int(curr[1]))
    elif curr[0] == "pop":
        lst.pop()
    elif curr[0] == "sort":
        lst.sort()
    elif curr[0] == "reverse":
        lst.reverse()
    elif curr[0] == "print":
        print(lst)
    
