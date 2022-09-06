from pprint import pprint


class Text():
    def __init__(self):
        print("\nText library.\n")

    def read_file():
        file = open("./files/file1.txt", "rt")
        contents = file.readlines()
        for i in [0, len(contents) - 1]:
            contents[i] = contents[i].strip()
        file.close()
        return contents
