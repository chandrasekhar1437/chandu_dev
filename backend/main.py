from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
import json
import os

app = FastAPI(title="Chandu Devs API")

# React frontend allow cheyadaniki CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Localhost & production domains
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Contact form data format
class ContactRequest(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    service: str
    message: str

DATA_FILE = "contacts.json"

@app.get("/")
def read_root():
    return {"status": "online", "message": "Chandu Devs Backend is running"}

@app.post("/api/contact")
async def save_contact(data: ContactRequest):
    try:
        contacts = []
        if os.path.exists(DATA_FILE):
            with open(DATA_FILE, "r", encoding="utf-8") as f:
                try:
                    contacts = json.load(f)
                except json.JSONDecodeError:
                    contacts = []

        # New entry add cheyyadam
        new_entry = data.dict()
        contacts.append(new_entry)

        # JSON file loki save cheyyadam
        with open(DATA_FILE, "w", encoding="utf-8") as f:
            json.dump(contacts, f, indent=4)

        print(f"New contact saved: {data.name} - {data.email}")
        return {"status": "success", "message": "Contact saved successfully!"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/contacts")
async def get_all_contacts():
    # Admin lo saved leads chusukotaniki
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    return []