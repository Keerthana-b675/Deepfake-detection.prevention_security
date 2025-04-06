🛡️ AI-Driven Deepfake Detection & Prevention for Cybersecurity

A GenAI-powered project designed to detect deepfake and tampered images using image metadata (EXIF) and custom risk analysis logic. Built for the **GenAI for Security** hackathon track.

Project Overview

Deepfakes and AI-manipulated content pose major risks to cybersecurity, privacy, and digital trust. This project offers a fast and reliable solution to:

- Analyze uploaded images
- Detect digital manipulation or suspicious traits
- Provide a threat score and visual result (Real / Fake)
## 🧠 Features

- **EXIF Metadata Analysis** (camera info, GPS, etc.)
- **AI-Driven Risk Scoring**
- **Live Detection Results** via UI
- **FastAPI Backend** + **React Frontend**
- **Clean and Interactive UI**
## 🛠️ Tech Stack we used

| Layer      | Technology        |
|------------|-------------------|
| Backend    | FastAPI, Python, EXIFRead |
| Frontend   | React.js, Axios   |
| Tools      | GitHub, VS Code, Swagger UI |
| Optional   | Streamlit (for quick demos), CORS for cross-origin support |

## 📂 our Folder Structure

Deepfake-detection.prevention_security/ │ ├── backend/ │   ├── main.py          # FastAPI logic │   └── requirements.txt # Backend dependencies │ ├── frontend/ │   ├── src/             # React components │   └── package.json     # Frontend dependencies │ └── README.md
📄 License

MIT License

---
