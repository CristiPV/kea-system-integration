import pickle

dict_to_pickle = {"Cristi": "human", "Planets": 8,
                  "Moons": 146, "Teodor_alien?": True}
dump_file = "PICKLES"


def pickle_object(pickle_this, output_file):
    # Pickle
    file = open(output_file, "wb")
    pickle.dump(pickle_this, file)
    file.close()

    # Read
    file = open(output_file, "rb")
    pickled_object = file.readline().strip()
    file.close()

    return pickled_object


def unpickle_object(unpickle_this):
    # Unpickle
    file = open(unpickle_this, "rb")
    unpickled_object = pickle.load(file)
    file.close()

    return unpickled_object


print("\nPickled Dict: ", pickle_object(dict_to_pickle, dump_file))

print("\nUnpickled Dict: ", unpickle_object(dump_file))
