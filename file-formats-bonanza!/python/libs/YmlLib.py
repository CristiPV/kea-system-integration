from pprint import pprint
import yaml

class Yml():
    def __init__(self):
        print("\nYml library.\n")
        parse_yml()


def parse_yml():
    file = open("../files/file2.yml", "rt")
    data = yaml.load(file, Loader=yaml.FullLoader)
    pprint(data)
    file.close()
