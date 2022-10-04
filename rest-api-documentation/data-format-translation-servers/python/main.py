from fastapi import FastAPI

from libs import Text, Yml, Xml, Json

app = FastAPI(
    swagger_ui_parameters={"syntaxHighlight.theme": "obsidian"},
    title="Data Format Translation Server",
    version="0.0.1",
    description="""
    Data Format Translation Server allows you to read and parse data
    from multiple formats.
    Supported formats: txt, yml, xml, json. 
    """,
    openapi_tags=[
        {
            "name": "formats",
            "description": "Read operations with multiple file types and formats."
        },
        {
            "name": "any path",
            "description": "Any path that is not implemented will end up here."
        }
    ]
)


@app.get("/text", tags=["formats"])
def read_text():
    return Text.read_file()


@app.get("/yml", tags=["formats"])
def read_yml():
    return Yml.parse_yml()


@app.get("/xml", tags=["formats"])
def read_xml():
    return Xml.parse_xml()


@app.get("/json", tags=["formats"])
def read_json():
    return Json.parse_json()


@app.get("/{full_path:path}", tags=["any path"])
def _():
    return "Oopsie, you have wandered too far. Go back to where you belong!"
