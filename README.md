

Pinterest Clone
This is a Pinterest clone application built using Node.js, Express, MongoDB, and Passport.js for authentication. Users can register, log in, and post images to their profile. Users must be logged in to view profiles and posts. Multer is used for uploading images from local devices, and Nodemon is used for development purposes to automatically restart the server on file changes.

Table of Contents
Features
Technologies Used
Installation
Usage
Project Structure
Contributing
License
Features
User authentication with Passport.js
Register and log in to the application
Post images to user profiles
View own profile and posts
Secure access to profiles (only logged-in users can view profiles)
Image upload using Multer
Development server with Nodemon
Technologies Used
Node.js: JavaScript runtime environment
Express: Web application framework for Node.js
MongoDB: NoSQL database for storing user data and posts
Passport.js: Authentication middleware for Node.js
Multer: Middleware for handling multipart/form-data, used for image uploads
Nodemon: Utility that monitors for changes in source files and automatically restarts the server
EJS: Template engine for rendering HTML
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/DarshilManiya/oibsip_taskno-4.git
cd Pinterest_Clone
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory and add the following variables:

env
Copy code
PORT=3000
MONGODB_URI=your_mongodb_uri
SESSION_SECRET=your_session_secret
Start the development server:

bash
Copy code
npm run dev
The application will be running at http://localhost:3000.

Usage
Register a new account:

Go to http://localhost:3000/register
Fill in the registration form and submit
Log in:

Go to http://localhost:3000/login
Fill in your credentials and submit
Post images:

Once logged in, navigate to the post submission form
Upload images from your local device
View profiles:

Logged-in users can view their own profile and posts
Profiles are secured, and only logged-in users can view them
Project Structure
plaintext
Copy code
Pinterest_Clone/
│
├── bin/
│   └── www                  # Starting point for the application
│
├── public/
│   ├── images/              # Image uploads
│   ├── javascripts/         # JavaScript files
│   └── stylesheets/         # CSS files
│
├── routes/
│   ├── index.js             # Main routes
│   └── users.js             # User-related routes
│
├── views/
│   ├── error.ejs            # Error page
│   ├── index.ejs            # Homepage
│   └── users/               # User-related views
│
├── .env                     # Environment variables
├── app.js                   # Main application file
├── package.json             # NPM dependencies and scripts
└── README.md                # Project README file
Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.
