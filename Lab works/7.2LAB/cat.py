from animal import Animal
class Cat(Animal):
    def __init__(self, name, age, color, indoor):
        super().__init__(name, age, color)
        self.indoor = indoor

    def speak(self):
        return "Meow"
    
    def __str__(self):
        return f"Cat: {self.name}, {self.age}, {self.color}, indoor={self.indoor}"