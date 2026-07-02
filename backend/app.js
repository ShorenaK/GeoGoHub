/*
  app.js

  This file configures the GeoGoHub Express application.

  Responsibilities:
Responsibilities:
- Create the Express application.
- Register global middleware.
- Parse incoming JSON requests.
- Configure user sessions.
- Initialize Passport authentication.
- Register API routes.
- Provide application and health check routes.
- Handle unknown routes and server errors.
- Export the configured app for server.js.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import express from 'express';
import session from 'express-session';

import applicationRoutes from './routes/applicationRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import rsvpRoutes from './routes/rsvpRoutes.js';
import userRoutes from './routes/userRoutes.js';

import passport from './config/passport.js';

import { errorHandler } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFound.js';

// Create the Express application.
const app = express();

// Parse incoming JSON request bodies.
app.use(express.json());

// Configure user sessions.
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    },
  }),
);

// Initialize Passport authentication.
app.use(passport.initialize());

// Enable persistent login sessions.
app.use(passport.session());

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
