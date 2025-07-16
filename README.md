# Leaderboard Project

## Project Description
This is a full-stack leaderboard application that allows users to be added, claim points, and view a ranked leaderboard. The backend is built with Node.js, Express, and MongoDB, while the frontend is a React application styled with Tailwind CSS.

## Technologies Used
- **Backend:** Node.js, Express, MongoDB (Mongoose), CORS, dotenv
- **Frontend:** React, Tailwind CSS, React Icons

## Prerequisites
- Node.js (v14 or higher recommended)
- MongoDB instance (local or cloud)

## Backend Setup and Run Instructions

1. Navigate to the backend directory:
   ```bash
   cd leaderboard/Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `Backend` directory with the following content:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the backend server:
   - For production:
     ```bash
     npm start
     ```
   - For development with auto-reload:
     ```bash
     npm run dev
     ```

The backend server will run on the port specified in the `.env` file or default to port 5000.

## Frontend Setup and Run Instructions

1. Navigate to the frontend directory:
   ```bash
   cd leaderboard/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

The frontend will run on `http://localhost:3000` by default and communicates with the backend API at `http://localhost:5000`.

## Environment Variables

- `MONGO_URI`: MongoDB connection string for the backend.
- `PORT`: Port number for the backend server (default is 5000).

## How to Use the App

- Add new users using the user add form.
- Select a user from the list.
- Claim points for the selected user using the claim button.
- View the updated leaderboard showing users ranked by their total points.

## License

This project is licensed under the ISC License.
