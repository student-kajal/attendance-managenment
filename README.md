# 🕒 Attendance Management System

A full-stack **MERN** (MongoDB, Express, React, Node.js) application for managing employee attendance with support for **photo uploads** and **REST API integration**.


---

## 🔗 Hosted Frontend

🌐 **Live Demo:**  
➡️ [https://attendance-final.vercel.app](https://attendance-final.vercel.app)

---
## 🔽 Clone the Repository

```bash
git clone https://github.com/student-kajal/attendance-management.git
cd attendance-management

## 🚀 Backend Setup

### Prerequisites

- Node.js
- MongoDB Atlas account
- Cloudinary account (for image upload)

### Backend `.env` (inside `attendance-backend1/`):

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

Start Backend:
cd attendance-backend1
npm install
npm start

Server will run at: http://localhost:5000

| Method | Endpoint        | Description            |
| ------ | --------------- | ---------------------- |
| GET    | /api/employees  | Get all employees      |
| POST   | /api/employees  | Add new employee       |
| GET    | /api/attendance | Get attendance records |
| POST   | /api/attendance | Mark attendance        |
| POST   | /upload-photo   | Upload employee photo  |

📸 File upload is handled via multer and Cloudinary.

🌐 Frontend Setup
Frontend .env (inside attendance-frontend/):
REACT_APP_API_URL=http://localhost:5000
Replace with backend URL if hosted.

cd attendance-frontend
npm install
npm start

Runs at: http://localhost:3000
```

🔄 Axios API Config (api.js)
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
});

export default API;

📤 Upload Endpoint (server.js)

const multer = require('multer');
const { storage } = require('./utils/cloudinary');
const upload = multer({ storage });

app.post('/upload-photo', upload.single('photo'), (req, res) => {
  res.json({ url: req.file.path });
});

## 🖼️ App Preview : <img width="1280" height="512" alt="image" src="https://github.com/user-attachments/assets/c353e2cd-f99a-45bc-90ab-0bc910c1f45a" />


🛡️ Tech Stack
Frontend: React, Axios

Backend: Express, MongoDB, Mongoose

Image Upload: Cloudinary

Deployment:
- **Frontend**: Hosted on [Vercel](https://vercel.com)
- **Backend**: Runs locally (`http://localhost:5000`) or can be deployed to platforms like [Render](https://render.com) or [Heroku](https://heroku.com)


🙋‍♂️ Author
Kajal
📧 Feel free to contribute or raise issues!


---


