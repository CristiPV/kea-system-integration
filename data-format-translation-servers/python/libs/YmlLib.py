from pprint import pprint
import yaml


class Yml():
    def __init__(self):
        print("\nYml library.\n")

    def parse_yml():
        file = open("./files/file2.yml", "rt")
        data = yaml.load(file, Loader=yaml.FullLoader)
        file.close()
        return data
