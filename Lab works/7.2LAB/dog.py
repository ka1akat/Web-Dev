from animal import Animal

class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age , color)
        self.breed = breed

    def speak(self):
        return "Woof"
    
    def __str__(self):
        return f"Name = {self.name}, age = {self.age}, color = {self.color}, breed = {self.breed} "