from pprint import pprint
import json


class Json():
    def __init__(self):
        print("\nJson library.\n")

    def parse_json():
        file = open("./files/file4.json", "rt")
        data = json.loads(file.read())
        file.close()
        return data
