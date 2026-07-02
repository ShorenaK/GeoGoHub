/*
  app.js

  This file configures the GeoGoHub Express application.

  Responsibilities:
  - Create the Express app.
  - Register global middleware.
  - Parse incoming JSON requests.
  - Register API routes.
  - Handle unknown routes and server errors.
  - Export the configured app for server.js.
  - Provide a basic API health check route.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import express from 'express';

import applicationRoutes from './routes/applicationRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import rsvpRoutes from './routes/rsvpRoutes.js';
import userRoutes from './routes/userRoutes.js';

import { errorHandler } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFound.js';

// Create the Express application.
const app = express();

// Parse incoming JSON request bodies.
app.use(express.json());

// Register API routes.
app.use('/api/applications', applicationRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/rsvps', rsvpRoutes);
app.use('/api/users', userRoutes);

// Root route.
app.get('/', (req, res) => {
  res.json({
    message: 'GeoGoHub backend is running',
  });
});

// Health check route.
app.get('/api/health', (req, res) => {
  res.json({
    status: 'success',
    message: 'GeoGoHub API is healthy',
  });
});

// Handle requests to routes that do not exist.
app.use(notFound);

// Handle unexpected server errors.
app.use(errorHandler);

export default app;
