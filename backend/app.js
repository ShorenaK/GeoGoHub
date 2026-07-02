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
import applicationRoutes from './routes/applicationRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import rsvpRoutes from './routes/rsvpRoutes.js';
import userRoutes from './routes/userRoutes.js';

// Create the Express application.
const app = express();

// Parse incoming JSON request bodies.
// This allows the backend to read data sent from React forms.
app.use(express.json());

// Register application routes.
app.use('/api/applications', applicationRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/rsvps', rsvpRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'GeoGoHub backend is running',
  });
});

// This confirms that the Express app is responding correctly.
app.get('/api/health', (req, res) => {
  res.json({
    status: 'success',
    message: 'GeoGoHub API is healthy',
  });
});

export default app;
