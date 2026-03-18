from dog import Dog
from cat import Cat

dog1 = Dog("Rocky", 3, "Black", "Labrador")
dog2 = Dog("Max", 5, "Brown", "Bulldog")
cat1 = Cat("Luna", 2, "White", True)

animal = [dog1, dog2, cat1]

for a in animal:
    print(a)