from typing import Union

from fastapi import FastAPI

import requests

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.get("/req")
def _():
    response = requests.get("http://127.0.0.1:3000/python")
    return response.content
