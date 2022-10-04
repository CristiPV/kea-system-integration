from pprint import pprint
import json


class Json():
    def __init__(self):
        print("\nJson library.\n")
        parse_json()


def parse_json():
    file = open("../files/file4.json", "rt")
    data = json.loads(file.read())
    pprint(data)
    file.close()
