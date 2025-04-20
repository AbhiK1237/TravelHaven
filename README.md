# TravelHaven

**TravelHaven** is a web application designed to help users plan and manage their travel experiences. It offers features such as destination exploration, itinerary creation, and user reviews, providing a comprehensive platform for travel enthusiasts.

## 🌐 Live Demo

*Currently, there is no live demo available. Once deployed, the link will be provided here.*

---

## 🖼️ Screenshots

> Add your screenshots in a `screenshots/` folder and replace the paths below.

### 🏠 Home Page
![Home Page](screenshots/homepage.png)

### 🌍 Destination Page
![Destination Page](screenshots/destination.png)

### 📅 Itinerary Creator
![Itinerary Creator](screenshots/itinerary.png)

---

## 🛠️ Features

- 🌍 Destination Exploration: Discover various travel destinations with details.
- 📅 Itinerary Management: Create and manage personalized travel plans.
- 💬 User Reviews: Share and read experiences from other travelers.
- 📱 Responsive Design: Optimized for desktop and mobile.

---

## 📁 Project Structure

TravelHaven/
├── controllers/       # Handles request logic
├── models/            # Database schemas and models
├── routes/            # Application routes
├── views/             # EJS templates for rendering pages
├── public/            # Static assets (CSS, JS, images)
├── utils/             # Utility functions
├── app.js             # Main application entry point
├── cloudConfig.js     # Cloudinary configuration
├── middleware.js      # Custom middleware functions
├── package.json       # Project metadata and dependencies
└── .gitignore         # Files and directories to ignore in Git

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary](https://cloudinary.com/) account

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AbhiK1237/TravelHaven.git
   cd TravelHaven


    1.Install Dependencies
    npm install

    2.create a .env file
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    MONGODB_URI=your_mongodb_connection_string
    SESSION_SECRET=your_session_secret

   Scripts
    npm start – Run the app normally

    npm run dev – Run with nodemon for development

    📦 Tech Stack
Backend: Node.js, Express

Database: MongoDB (via Mongoose)

Templating: EJS

Media: Cloudinary

Styling: Custom CSS

Session & Auth: express-session, connect-flash

🧑‍💻 Contributing
Contributions are welcome! Follow these steps:

Fork the repository

Create a new branch: git checkout -b feature/your-feature

Commit changes: git commit -m "Add your feature"

Push to the branch: git push origin feature/your-feature

Open a Pull Request

📄 License
This project is licensed under the MIT License.

📫 Contact
Created by AbhiK1237 – feel free to reach out!