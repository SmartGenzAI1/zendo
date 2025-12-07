# backend/main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
import os
from dotenv import load_dotenv
import json

load_dotenv()

app = FastAPI(title="Zendo AI Assistant", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class ChatRequest(BaseModel):
    message: str
    user_id: str = "default"

class TaskRequest(BaseModel):
    description: str
    user_id: str = "default"

# HuggingFace API Configuration
HF_API_KEY = os.getenv("HF_API_KEY", "your_huggingface_token")
MODEL_URL = "https://api-inference.huggingface.co/models/microsoft/phi-3-mini-4k-instruct"

# In-memory storage for demo (replace with database in production)
tasks_db = []
chat_history = []

@app.get("/")
def read_root():
    return {
        "message": "Welcome to Zendo API",
        "ai_assistant": "Zabar",
        "status": "running",
        "version": "1.0.0"
    }

@app.post("/api/chat")
async def chat_with_zabar(request: ChatRequest):
    """Chat with Zabar AI"""
    try:
        # Prepare prompt with context
        prompt = f"""You are Zabar, a helpful Kashmiri AI assistant for the Zendo app. 
        You help users manage tasks, schedules, and daily life.
        Be warm, friendly, and sprinkle Kashmiri culture references.
        
        User: {request.message}
        Zabar:"""
        
        # Call HuggingFace API
        headers = {
            "Authorization": f"Bearer {HF_API_KEY}",
            "Content-Type": "application/json"
        }
        
        payload = {
            "inputs": prompt,
            "parameters": {
                "max_new_tokens": 200,
                "temperature": 0.7,
                "top_p": 0.9,
                "do_sample": True
            }
        }
        
        response = requests.post(MODEL_URL, headers=headers, json=payload)
        
        if response.status_code == 200:
            ai_response = response.json()[0]["generated_text"]
            # Extract only Zabar's response
            if "Zabar:" in ai_response:
                ai_response = ai_response.split("Zabar:")[-1].strip()
            
            # Store in history
            chat_entry = {
                "user": request.message,
                "ai": ai_response,
                "timestamp": "now"
            }
            chat_history.append(chat_entry)
            
            return {
                "success": True,
                "response": ai_response,
                "assistant": "Zabar"
            }
        else:
            # Fallback responses
            fallback_responses = {
                "hello": "Salaam! I'm Zabar, your Kashmiri AI assistant. How can I help you today? 🌸",
                "task": "I can help manage your tasks! Try saying: 'Remind me to buy milk at 5 PM'",
                "help": "I can: 1) Add and manage tasks 2) Create schedules 3) Set reminders 4) Extract tasks from messages 5) Give daily suggestions",
                "default": "I understand! Let me help with that. In the full version, I'll process this with AI."
            }
            
            for key in fallback_responses:
                if key in request.message.lower():
                    return {
                        "success": True,
                        "response": fallback_responses[key],
                        "assistant": "Zabar"
                    }
            
            return {
                "success": True,
                "response": "I'm here to help! I can assist with tasks, schedules, and daily planning.",
                "assistant": "Zabar"
            }
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/tasks")
async def create_task(request: TaskRequest):
    """Create a new task"""
    task = {
        "id": len(tasks_db) + 1,
        "description": request.description,
        "user_id": request.user_id,
        "completed": False,
        "created_at": "now"
    }
    tasks_db.append(task)
    return {"success": True, "task": task, "message": "Task added successfully"}

@app.get("/api/tasks")
async def get_tasks(user_id: str = "default"):
    """Get all tasks for a user"""
    user_tasks = [task for task in tasks_db if task["user_id"] == user_id]
    return {"success": True, "tasks": user_tasks}

@app.get("/api/stats")
async def get_stats():
    """Get app statistics"""
    return {
        "success": True,
        "stats": {
            "total_tasks": len(tasks_db),
            "completed_tasks": len([t for t in tasks_db if t.get("completed", False)]),
            "active_users": len(set([t["user_id"] for t in tasks_db])),
            "ai_requests": len(chat_history)
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
