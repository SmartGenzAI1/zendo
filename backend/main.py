from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import requests
import os
import json

app = FastAPI(title="Zendo AI Assistant", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# HuggingFace API Configuration
HF_API_KEY = os.getenv("HF_API_KEY", "")
MODEL_URL = "https://api-inference.huggingface.co/models/microsoft/phi-3-mini-4k-instruct"

# Simple in-memory storage
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
async def chat_with_zabar(message: str, user_id: str = "default"):
    """Chat with Zabar AI"""
    try:
        # Prepare prompt with context
        prompt = f"""You are Zabar, a helpful Kashmiri AI assistant for the Zendo app. 
        You help users manage tasks, schedules, and daily life.
        Be warm, friendly, and sprinkle Kashmiri culture references.
        
        User: {message}
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
        
        if not HF_API_KEY:
            # Fallback responses if no API key
            fallback_responses = {
                "hello": "Salaam! I'm Zabar, your Kashmiri AI assistant. How can I help you today? 🌸",
                "task": "I can help manage your tasks! Try saying: 'Remind me to buy milk at 5 PM'",
                "help": "I can: 1) Add and manage tasks 2) Create schedules 3) Set reminders 4) Extract tasks from messages",
                "default": "I'm Zabar, your AI assistant! Add your HuggingFace API key to enable full AI features."
            }
            
            for key in fallback_responses:
                if key in message.lower():
                    response_text = fallback_responses[key]
                    break
            else:
                response_text = fallback_responses["default"]
            
            return {
                "success": True,
                "response": response_text,
                "assistant": "Zabar"
            }
        
        response = requests.post(MODEL_URL, headers=headers, json=payload, timeout=30)
        
        if response.status_code == 200:
            ai_response = response.json()[0]["generated_text"]
            # Extract only Zabar's response
            if "Zabar:" in ai_response:
                ai_response = ai_response.split("Zabar:")[-1].strip()
            
            # Store in history
            chat_entry = {
                "user": message,
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
            return {
                "success": True,
                "response": "Zabar is thinking... try again in a moment.",
                "assistant": "Zabar"
            }
            
    except Exception as e:
        print(f"Error: {e}")
        return {
            "success": False,
            "response": "Sorry, Zabar is taking a short break. Please try again.",
            "assistant": "Zabar"
        }

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "service": "zendo-backend"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
