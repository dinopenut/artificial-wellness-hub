# Artificial Wellness Hub

A dual-purpose AI assistant built with **React** and powered by **Gemini 1.5 Pro** via the **Google AI API**.  
This project was developed for the SASE 2025 Hackathon – Medical Track

## 🔍 Features

### 🩺 Somatic Assessment (Physical Symptom Assessments)
- Provides potential causes based on user-reported physical symptoms
- Responds with calm, concise language
- Offers next steps or encourages professional care

### 🧠 Mental Insight Assistant (Mental Health Chatbot)
- Friendly, reflective mental health chatbot
- Maintains context using Gemini’s chat mode
- Encourages emotional wellness without offering medical advice
- Safe-guarded against misuse and prompt injection

### 🎨 UI/UX
- Calming color gradient for mood-aligned sections
- Mobile-friendly design
- Disclaimers on both Mental and Somatic pages

### 🛠️ Tech Stack

- **Frontend**: React, JSX, CSS  
- **Backend**: Flask (Python), Flask-CORS  
- **AI Model**: Gemini 1.5 Pro (Google AI API)

## 🚀 Running Locally

```bash
# Clone the repo
git clone https://github.com/your-username/symptom-checker
cd symptom-checker
### Frontend (React)
cd client
npm install
npm start
### Backend (Flask)
cd ../server
python3 app.py
```