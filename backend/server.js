/*
  server.js

  This is the entry point for the GeoGoHub backend application.

  Responsibilities:
  - Initialize the Express application.
  - Load environment variables from the .env file.
  - Configure the server port.
  - Start the Express server.
  - Provide a basic health check endpoint to verify the server is running.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import express from 'express';
import dotenv from 'dotenv';

// Load environment variables from the .env file.
dotenv.config();

// All middleware and API routes will be attached to this object.
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'GeoGoHub backend is running',
  });
});

// Start the Express server and listen for incoming requests.
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});