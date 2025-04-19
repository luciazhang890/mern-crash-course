# 🛒 MERN Product Store

A simple full-stack product management app built with the MERN stack (MongoDB, Express, React, Node.js).  
Users can view, add, update, and delete product items through a responsive and clean UI.



## ✨ Features

- View all products with image, price, and description
- Add new products via form
- Update product details inline
- Delete products
- Responsive layout
- Light/dark mode toggle



## 🧱 Tech Stack

- **Frontend:** React + Vite + Chakra UI  
- **Backend:** Node.js + Express  
- **Database:** MongoDB (Atlas)  
- **Others:** Mongoose, React Router, Render (Deployment)



## 🚀 How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/luciazhang890/mern-crash-course.git
cd mern-crash-course
```

2. Install dependencies

```bash
npm install
npm run build
```

This will:
-	Install backend dependencies (in the root directory)
-	Install frontend dependencies (inside /frontend)
-	Build the frontend app


3. Start the development server (with hot reload)

```bash
npm run dev
```


This command will:
	•	Start the backend server using nodemon in development mode
	•	Automatically serve the frontend from the built files

🛠️ Make sure you have created a .env file in the root directory with your MongoDB connection string before starting the server. Example:

MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/your-db-name




✅ Production Mode

If you want to run the app in production mode:

npm start

This will use Node.js to run the backend and serve the static frontend files from the frontend/dist directory.



📚 Learning Reference

This project was created as a hands-on learning exercise by following a MERN stack crash course.
Throughout the process, I gained experience in setting up full-stack applications, working with REST APIs, MongoDB, and handling real-world component design in React.

Minor modifications and debugging were done independently to better understand key concepts and workflows.

⸻

🌐 Live Demo

https://mern-crash-course-oh17.onrender.com 

---
