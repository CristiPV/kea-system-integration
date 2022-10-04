from fastapi import FastAPI
from dotenv import dotenv_values
from datetime import datetime
import requests
import json

config = dotenv_values()

app = FastAPI(
    swagger_ui_parameters={"syntaxHighlight.theme": "obsidian"},
    title="Date Server",
    version="0.0.1",
    description="""
    Date server that returns the current timestamp in ISO8601 standard. 
    """,
    openapi_tags=[
        {
            "name": "timestamp",
            "description": "Read operations that return the current timestamp in ISO8601."
        },
        {
            "name": "node integration",
            "description": "The response of these operation come as a result of the integration with the node server."
        },
        {
            "name": "any path",
            "description": "Any path that is not implemented will end up here."
        }
    ]
)


@app.get("/timestamp", tags=["timestamp"])
def read_timestamp():
    return {"Python Server Timestamp": datetime.now().isoformat()}


@app.get("/timestamp/node", tags=["timestamp", "node integration"])
def read_timestamp_from_node():
    node_timestamp = requests.get(config["NODE_SERVER"] + "/timestamp")
    return {"Node Response": json.loads(node_timestamp.content)}


@app.get("/{full_path:path}", tags=["any path"])
def _():
    return "Oopsie, you have wandered too far. Go back to where you belong!"
