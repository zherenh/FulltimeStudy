import string

from traitlets import Int


def demo(name, age = 20)->int:
    print(name)
    print(age)
    return age

demo("Ann", 10)

def __init__(self):
    self.A = 100
    