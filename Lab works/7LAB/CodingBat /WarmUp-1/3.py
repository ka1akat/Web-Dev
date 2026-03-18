def last2(str):
  s = len(str)
  cnt = 0
  need = str[s-2:s]
  for i in range(s):
    if str[i] == need[0] and str[i+1] == need[1]:
      cnt +=1
    return cnt
      



