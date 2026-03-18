if __name__ == '__main__':
    students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name,score])
    scores = []
    for i in students:
        scores.append(i[1])
    unique_scores = sorted(set(scores))
    second_lowest = unique_scores[1]
    
    result = []
    for i in students:
        if i[1] == second_lowest:
            result.append(i[0])
        
    result.sort()
    for i in result:
        print(i)
