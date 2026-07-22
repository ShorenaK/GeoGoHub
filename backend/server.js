/* I now realized that you separated the server logic into a separate file here and imported it in the app.js file, I now understand how it was done here.
Also, you should not need the 'dotenv' module for this project. */
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

import dotenv from 'dotenv';
import app from './app.js';
import { connectDatabase } from './db/database.js';

// Load environment variables from the .env file.
dotenv.config();

const PORT = process.env.PORT || 3000;

// Connect to MongoDB first, then start the server.
// This prevents the app from running without a database connection.
connectDatabase()
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
  });
