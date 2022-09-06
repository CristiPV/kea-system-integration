from fastapi import FastAPI
from dotenv import dotenv_values
from datetime import datetime
import requests
import json

config = dotenv_values()

app = FastAPI()


@app.get("/timestamp")
def read_timestamp():
    return {"Python Server Timestamp": datetime.now().isoformat()}


@app.get("/timestamp/node")
def read_timestamp_from_node():
    node_timestamp = requests.get(config["NODE_SERVER"] + "/timestamp")
    return {"Node Response": json.loads(node_timestamp.content)}


@app.get("/{full_path:path}")
def _():
    return "Oopsie, you have wandered too far. Go back to where you belong!"
