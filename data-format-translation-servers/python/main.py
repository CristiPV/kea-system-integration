from typing import Union
from fastapi import FastAPI

from libs import Text, Yml, Xml, Json

app = FastAPI()


@app.get("/text")
def read_text():
    return Text.read_file()


@app.get("/yml")
def read_yml():
    return Yml.parse_yml()


@app.get("/xml")
def read_xml():
    return Xml.parse_xml()


@app.get("/json")
def read_json():
    return Json.parse_json()


@app.get("/{full_path:path}")
def _():
    return "Oopsie, you have wandered too far. Go back to where you belong!"
