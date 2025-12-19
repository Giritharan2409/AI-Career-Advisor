# AI Career Advisor

An intelligent career guidance platform powered by AI that helps users discover their ideal career path in AI and data science through adaptive assessments and personalized learning roadmaps.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation Instructions](#installation-instructions)
- [Usage Guide](#usage-guide)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Performance Considerations](#performance-considerations)
- [Future Enhancements](#future-enhancements)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Project Overview

**AI Career Advisor** is a web-based application designed to guide candidates through their career journey in artificial intelligence, data science, and machine learning. The platform combines AI-powered assessment with personalized learning roadmaps to help users:

- Evaluate their current skills and knowledge
- Receive personalized career recommendations
- Access curated learning resources
- Download comprehensive learning roadmaps in Excel format
- Chat with an AI advisor for career guidance

The application uses Google's Gemini API for intelligent responses and Flask as the backend framework for robust server-side handling.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------### Target Users
- Aspiring data analysts
- Machine learning enthusiasts
- Data science professionals
- Career switchers interested in AI/tech fields

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Features

### 1. **Smart Assessment System**
- 15 adaptive AI-powered questions tailored to candidate skills
- Evaluates knowledge in Python, SQL, Statistics, Machine Learning, and Data Analysis
- Generates intelligent scores and career recommendations
- Real-time feedback and result analysis

### 2. **Career Matching**
- AI-powered career path recommendations based on assessment results
- Three primary career paths: Data Analyst, Data Scientist, Machine Learning Engineer
- Personalized career guidance and skill gap analysis

### 3. **Personalized Learning Roadmap**
- Step-by-step learning paths for each career
- Free certification courses with direct links
- YouTube tutorial recommendations curated by AI
- Recommended books and resources
- Downloadable Excel format for offline access

### 4. **AI Chatbot Assistant**
- Real-time chat interface for career questions
- Intelligent question validation to ensure relevant queries
- Trained to answer only AI/career-related topics
- Simple, concise responses in plain English
- Rejects off-topic questions with helpful guidance

### 5. **Excel Export Functionality**
- Download roadmap with all learning resources
- Professional formatting with color-coded sections
- Includes: Learning Path, Certifications, Tutorials, Books
- Ready for offline study and reference

### 6. **Responsive UI Design**
- Modern dark-themed interface with gradient effects
- Fully responsive design for desktop and mobile
- Smooth animations and hover effects
- User-friendly navigation

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Technology Stack

### Backend
- **Framework**: Flask 3.0.0
- **Language**: Python 3.x
- **API Integration**: Google Gemini 2.5 Flash API
- **HTTP Client**: requests library
- **Excel Generation**: openpyxl 3.10.10
- **Environment Management**: python-dotenv 1.0.0

### Frontend
- **Markup**: HTML5
- **Styling**: Tailwind CSS (via CDN)
- **Scripting**: Vanilla JavaScript (ES6+)
- **Icons & Animations**: Custom SVG and CSS animations

### Deployment & Infrastructure
- **Web Server**: Flask development server (supports WSGI servers like Gunicorn for production)
- **Environment**: Python virtual environment
- **Port**: 5000 (default)

---

## Installation Instructions

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)
- Git (optional)
- Google Gemini API key

### Step 1: Clone or Download the Project
```bash
# If using git
git clone <repository-url>
cd AI\ Career\ Advisor

# Or extract the project folder
```

### Step 2: Create Virtual Environment
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

### Step 3: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 4: Configure Environment Variables
Create a `.env` file in the project root:
```
GEMINI_API_KEY=your_api_key_here
```

Alternatively, set the environment variable:
```bash
# Windows (PowerShell)
$env:GEMINI_API_KEY="your_api_key_here"

# macOS/Linux
export GEMINI_API_KEY="your_api_key_here"
```

### Step 5: Run the Application
```bash
python app.py
```

The application will start at `http://localhost:5000`

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Usage Guide

### 1. Home Page
- Navigate to `http://localhost:5000`
- Read about the platform features
- Click "Start Your Exam Journey" to begin assessment

### 2. Taking the Exam
- Accept exam rules and conditions
- Answer 15 AI-generated questions
- Questions adapt based on your responses
- Submit exam when complete

### 3. View Results
- See your assessment results
- Get recommended career path
- View career-specific guidance
- Navigate to learning roadmap

### 4. Learning Roadmap
- View personalized learning path
- Explore free certifications
- Access YouTube tutorial recommendations
- Discover recommended books
- **Download as Excel**: Click "📥 Download Roadmap (Excel)" to save all resources

### 5. Chat with AI Advisor
- Click the chatbot icon (bottom-right)
- Ask questions about AI careers, learning resources, roadmaps
- Get instant AI-powered responses
- Receive guidance for off-topic questions

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
