class Vehicle:
    def __init__(self, brand, speed, year):
        self.brand = brand
        self.speed = speed
        self.year = year

    def drive(self):
        return f"You can {self.brand} ride by speed {self.speed}"
    def stop(self):
        return "You can stop"
    def __str__(self):
        return f"Brand = {self.brand}, speed = {self.speed}, year = {self.year}"