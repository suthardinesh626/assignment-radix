# TaskMan Client

This is the frontend application for TaskMan, built with React, Vite, and GSAP for animations.

## Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn

## Installation

1.  Navigate to the client directory:
    ```bash
    cd client
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

## Configuration

Ensure you have a `.env` file in the root of the `client` directory if required by the application (e.g., for API endpoints locally).
Example:
```
VITE_API_URL=http://localhost:5000
```

## Running the Application

To start the development server:

```bash
npm run dev
```

The application will run at `http://localhost:5173` (or the port shown in your terminal).

## Features

-   **Scroll Animations**: Sections animate in as you scroll down.
-   **Interactive Hover Effects**: Hero and Why sections feature parallax cursor-following effects.
-   **GSAP Integration**: Uses GSAP and ScrollTrigger for high-performance animations.
