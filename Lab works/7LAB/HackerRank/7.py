if __name__ == '__main__':
    student_marks = {}
for i in range(int(input())):
    data = input().split()
    name = data[0]
    marks = list(map(float, data[1:]))
    student_marks[name] = marks

query_name = input()
marks1 = student_marks[query_name]
avg = sum(marks1)/len(marks1)

print(format(avg,".2f"))