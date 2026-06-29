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
const app = express();

// Parse incoming JSON request bodies.
// This allows the backend to read data sent from React forms.
app.use(express.json());


