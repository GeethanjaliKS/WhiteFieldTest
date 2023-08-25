# WhiteFieldTest Employee Registration Form

## Installation

1. Install React.js and Tailwind CSS:
npx create-react-app test
cd test
npm start

2. Install the backend dependencies:
npm init -y
npm install express mongoose cors


## Database
MongoDB

## Description

This project is an Employee Registration Form with an admin login feature, created using React.js for the frontend and Node.js with Express.js and MongoDB for the backend.

### Admin Login

- Admin credentials:
- Username: admin
- Password: admin

- Upon successful login, the admin information is stored in the local storage. If the login fails, the admin won't be able to access the admin dashboard.

### Employee Registration

- The admin can create employee details using the registration form.

- All fields in the form are required. If any field is left empty, an error message "Please fill required fields" will be displayed upon submission.

- If an email ID already exists in the database, the data won't be saved, and a message "Email ID already exists" will be shown.

- Supported image formats for upload: PNG and JPG. WebP format is not accepted.

## Usage

1. Start the React development server:
npm start


2. Start the backend server:
nodemon Server.js


 
