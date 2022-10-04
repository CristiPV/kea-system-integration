import json
from datetime import datetime
import requests

# webhook_url = "http://127.0.0.1:8000/webhook"
webhook_url = "http://f729-94-18-243-162.ngrok.io/webhook"

data = {
    "description": "This is some data",
    "timestamp": datetime.now().isoformat()
}

response = requests.post(webhook_url, json=json.dumps(data),
                         headers={"Content-Type": "application/json"})

print(response.text)
