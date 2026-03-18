from vehicle import Vehicle
class Car(Vehicle):
    def __init__(self, brand, speed, year, doors):
        super().__init__(brand, speed, year)
        self.doors = doors
    def drive(self):
        return f"You are driving {self.brand}"
    
    def open_trunk(self):
        return f"The door of car is {self.doors}"
    
    def __str__(self):
        return f"Car: {self.brand}, {self.speed}, {self.year} "
    
    