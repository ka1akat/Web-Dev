from vehicle import Vehicle
class Bike(Vehicle):
    def __init__(self, brand, speed, year, type):
        super().__init__(brand, speed, year)
        self.type = type

    def drive(self):
        return f"You are driving {self.brand}"
    
    def do_wheelie(self):
        return f"{self.brand} doing wheelie"
    
    def __str__(self):
        return f"Bike: {self.brand}, {self.speed}, {self.year}, {self.type} "