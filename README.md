# Estate Website Backend

## Overview

This repository contains the backend for the Estate Website project. The backend is built using Node.js, Express, and MongoDB. It includes user authentication implemented with JWT tokens.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js to handle HTTP requests and routing.
- **MongoDB**: NoSQL database for storing user data and other information.
- **JWT**: JSON Web Tokens for secure user authentication.

## Setup and Installation

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (locally installed or use a cloud provider like MongoDB Atlas)

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/estate-website-backend.git
   cd estate-website-backend

2.  **Install the required Node.js packages**
   
    npm install

3.  **Set Up Environment Variables**

    PORT=4000
    MONGO_URI=mongodb://localhost:27017/estate-website
    JWT_SECRET=your_jwt_secret

4.  **Run the Server**

    npm start

