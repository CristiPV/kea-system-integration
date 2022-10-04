from fastapi import FastAPI, Request
import json

app = FastAPI()


@app.post("/webhook")
async def _(request: Request):
    print(json.loads(await request.body()))
    return {"message": "called webhook"}


@app.get("/{full_path:path}")
def _():
    return "Oopsie, you have wandered too far. Go back to where you belong!"
