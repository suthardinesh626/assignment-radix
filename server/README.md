# TaskMan Server

This is the backend server for TaskMan, built with Node.js, Express, and MongoDB.

## Prerequisites

-   Node.js (v16 or higher)
-   npm
-   MongoDB (Local or Atlas connection string)

## Installation

1.  Navigate to the server directory:
    ```bash
    cd server
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

## Configuration

Create a `.env` file in the root of the `server` directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```
*(Adjust the variables based on your actual `.env` requirements)*

## Running the Server

To start the server in development mode (with nodemon):

```bash
npm run dev
```

To start in production mode:

```bash
npm start
```

The server will typically run on `http://localhost:5000`.

## API Endpoints

-   `POST /api/signup`: Registers a new user and sends a coupon code.
