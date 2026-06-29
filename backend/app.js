/*
  app.js

  This file configures the GeoGoHub Express application.

  Responsibilities:
  - Create the Express app.
  - Register global middleware.
  - Parse incoming JSON requests.
  - Provide a basic API health check route.
  - Export the configured app for server.js.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import express from 'express';

// Create the Express application.
// Server startup happens in server.js, not here.
const app = express();

