# User Registration Application

A full-stack user registration application built with a Node.js and Express backend, and a React frontend with Tailwind CSS for styling.

## Features

- View a list of registered users
- Add a new user with fields for First Name, Last Name, Email, and Date of Birth
- Update existing user information
- Delete a user from the list
- Backend CRUD operations integrated with a frontend interface
- React Query is used to handle API calls

# Tech Stack

- Frontend: React, Tailwind CSS, TanStack React Query
- Backend: Node.js, Express, MongoDB
- Database: MongoDB

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB
- Git

## Installation

### Clone the Repository

```bash
   git clone https://github.com/sankytech12/Steamify-Netflix-Clone.git
```

## Backend Setup

1. Navigate to the Backend Directory

```bash
cd backend
```

2. Install Dependencies

```bash
npm install
```

3. Configure Environment Variables

- Create a .env file in the backend directory with the following:

``` bash
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
```

4. Run the Backend Server

``` bash
npm start
```

The server will start on http://localhost:5000.

## Frontend Setup

1. Navigate to the Frontend Directory

```bash
cd ../frontend
```

2. Install Dependencies

```bash
npm install
```

3. Configure API URL

- In your frontend project (if needed, add a configuration file or update the API base URL to http://localhost:5000).


4. Run the Frontend Application

```bash
npm start
```

The frontend will start on http://localhost:3000.

## Project Structure
```
root
├── server          # Backend code
│   ├── controllers  # API logic
│   ├── services     # Business logic
│   ├── models       # Mongoose models
│   ├── routes       # API routes
│   └── app.js       # Main server file
│
└── client         # Frontend code
    ├── public       # Public assets
    ├── src          # React components and hooks
    └── App.js       # Main React file
```
## Usage

1. View Registered Users: Navigate to the home page to see all users.
2. Add a User: Fill out the form with First Name, Last Name, Email, and Date of Birth to add a new user.
3. Update a User: Click on the edit icon next to a user to update their information.
4. Delete a User: Click on the delete icon next to a user to remove them.

