from pprint import pprint
import xmltodict


class Xml():
    def __init__(self):
        print("\nXml library.\n")

    def parse_xml():
        file = open("./files/file3.xml", "rt")
        data = xmltodict.parse(file.read())
        file.close()
        return data
