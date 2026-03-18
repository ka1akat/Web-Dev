from car import Car
from bike import Bike

car1 = Car("Toyota", 120, 2020, "Open")
car2 = Car("Djiguli", 180, 2019, "Close")
bike1 = Bike("Yamaha", 180, 2022, "sport")

vehiles = [car1, car2, bike1]

for i in vehiles:
    print(i)
    print(i.drive())