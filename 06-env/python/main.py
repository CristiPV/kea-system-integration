import os
from dotenv import dotenv_values


config = dotenv_values()
print(os.environ.get("SECRET"))

# config = {
#     **dotenv_values(".env"),
#     # **dotenv_values(".env.shared"),  # load shared development variables
#     # **dotenv_values(".env.secret"),  # load sensitive variables
#     # **os.environ,  # override loaded values with environment variables
# }

print(config)
