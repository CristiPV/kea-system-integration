from fastapi import FastAPI
from dotenv import dotenv_values
from datetime import datetime

config = dotenv_values()

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": 1}


@app.get("/timestamp/{number}")
def read_timestamp_with_number(number: int):
    return {"Python Server Timestamp": datetime.now().isoformat(),
            "Number": number}


@app.get("/timestamp")
def read_timestamp():
    return {"Python Server Timestamp": datetime.now().isoformat()}


@app.get("/{full_path:path}")
def _():
    return "Oopsie, you have wandered too far. Go back to where you belong!"
