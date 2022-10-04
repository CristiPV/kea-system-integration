from pprint import pprint


class Text():
    def __init__(self):
        print("\nText library.\n")
        read_file()


def read_file():
    file = open("../files/file1.txt", "rt")
    contents = file.readlines()
    for line in contents:
        pprint(line.strip())
    file.close()
