Easily – Job Portal (Node.js + Express + EJS)

A simple job portal web application built using Node.js, Express, EJS, and session-based authentication.
It supports job listings, job applications with resume upload, recruiter actions, and basic user authentication.

This project focuses more on backend flow + MVC structure .

Tech Stack

Node.js

Express.js

EJS (with express-ejs-layouts)

Session-based authentication

Multer – resume uploads

Nodemailer – email confirmation

Bootstrap – basic UI styling

In-memory models (no database)

Project Structure
src/
├── controllers/
├── middleware/
├── models/
├── public/
│   ├── css/
│   ├── images/
│   ├── js/
│   └── uploads/
├── routes/
├── views/
│   ├── applications/
│   ├── auth/
│   ├── jobs/
│   └── layouts/
└── app.js
server.js

Features
Authentication

User login

User registration

Session-based auth

Role-based access (Recruiter vs User)

Jobs

View all jobs

View job details

Create job (recruiter)

Update job

Delete job

Applications

Apply for a job

Upload resume (PDF/DOC)

Email confirmation after applying

Recruiter can view applicants

Middleware

Auth protection

Recruiter-only routes

File upload validation

Email sending (non-blocking)

Environment Variables

Create a .env file in the root directory:

PORT=3000
SESSION_SECRET=your_secret_key

MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password
MAIL_SECURE=false
MAIL_FROM_NAME=Easily Team

⚠️ Use Gmail App Password, not your real password.

Installation & Setup
npm install

If not already installed, install these explicitly:

npm install express ejs express-ejs-layouts express-session multer nodemailer dotenv

Run the project:

nodemon server.js

Server runs on:

http://localhost:3000

Important Routes (Testing Links)
Public

GET / → Landing page

GET /jobs → All jobs

GET /jobs/:id → Job details

Authentication

GET /auth/login

POST /auth/login

GET /auth/register

POST /auth/register

GET /auth/logout

Applications

POST /apply/:jobId → Apply for job (form-based, not Postman)

Recruiter

GET /job/applicants/:jobId → View applicants

How to Test (No Postman Needed)

This is a server-rendered app, not an API-only app.

✅ Test via browser only:

Open

http://localhost:3000

Go to Jobs

Open a job

Click Apply Now

Fill the modal form

Upload resume

Submit

If email credentials are correct → confirmation mail is sent.

Known Limitations (Be Honest)

UI is basic / structural

No database (data resets on restart)

No password hashing (educational project)

No client-side validation

No advanced recruiter dashboard

This project is meant to demonstrate Express architecture + middleware flow, not production readiness.

Why This Project Is Still Valid

Clean MVC separation

Proper middleware usage

Real file uploads

Real email sending

Session handling

Role-based access

That’s already more than 80% of beginner projects.

Future Improvements (Optional)

Add MongoDB / PostgreSQL

Hash passwords (bcrypt)

Improve UI (Tailwind / React)

Add pagination & filters

Admin dashboard

--END--

