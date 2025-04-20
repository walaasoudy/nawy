#  Apartments App Task Nawy

A full-stack web application for managing apartments using **MongoDB, Express.js, next, and Node.js**. The project is containerized with **Docker** for easy development and deployment.


## 📁 Project Structure

. ├── backend/ # Node.js + Express API │ ├── node_modules/ (ignored) │ └── .env  ├── frontend/ # next.js app │ └── node_modules/ (ignored) ├── docker-compose.yml ├── .gitignore └── README.md


## 🚀 Getting Started

### 1. Clone the repository

git clone https://github.com/YOUR_USERNAME/apartments-app.git

cd apartments-app

### 2. Install dependencies
   
Skip this step if you are using Docker only.

cd backend && npm install

cd ../frontend && npm install

### 3. Create environment file
   
Inside the backend/ folder, create a .env file:

MONGO_URI=mongodb://mongo_db:27017/apartments

PORT=5000

The .env file is already added to .gitignore.

### 4. Run the app with Docker
   
docker-compose up --build


🔗 Access the Application

Frontend: http://localhost:3000

Backend API: http://localhost:5000/api/apartments

MongoDB runs inside Docker and listens on port 27017

🧰 Technologies Used

MongoDB – Database

Express.js – Backend framework

next.js – Frontend library

Node.js – JavaScript runtime

Docker & Docker Compose – Containerization

📂 .gitignore

The project uses a .gitignore file to exclude:

###  Node modules
backend/node_modules/

frontend/node_modules/

### Environment files

.env

###  System and log files
*.log

.DS_Store

## Demo Video

Watch the full demo of the Apartments App here:  
🔗 [Apartments App Demo](https://drive.google.com/file/d/YOUR_VIDEO_ID/view?usp=sharing)

