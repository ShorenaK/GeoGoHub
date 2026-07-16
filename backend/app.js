/*
  app.js

  This file configures the GeoGoHub Express application.

  Responsibilities:
  - Create the Express application.
  - Register global middleware.
  - Parse incoming JSON requests.
  - Configure user sessions.
  - Initialize Passport authentication.
  - Register API routes.
  - Serve the React frontend in production.
  - Handle unknown routes and server errors.
  - Export the configured app for server.js.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import session from 'express-session';

import passport from './config/passport.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFound.js';
import applicationRoutes from './routes/applicationRoutes.js';
import authRoutes from './routes/authRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import rsvpRoutes from './routes/rsvpRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(currentFilePath);
const frontendDistPath = path.resolve(currentDirectory, '../frontend/dist');

const isProduction = process.env.NODE_ENV === 'production';

// Render runs Express behind a reverse proxy.
if (isProduction) {
  app.set('trust proxy', 1);
}

// Parse incoming JSON request bodies.
app.use(express.json());

// Configure user sessions.
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: 'auto',
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60 * 1000,
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
app.use('/api/auth', authRoutes);

// Health check route.
app.get('/api/health', (req, res) => {
  res.json({
    status: 'success',
    message: 'GeoGoHub API is healthy',
  });
});

// Serve the compiled React application in production.
if (isProduction) {
  app.use(express.static(frontendDistPath));

  // Return the React application for non-API browser requests.
  app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api') && req.accepts('html')) {
      return res.sendFile(path.join(frontendDistPath, 'index.html'));
    }

    return next();
  });
} else {
  // Development-only root route.
  app.get('/', (req, res) => {
    res.json({
      message: 'GeoGoHub backend is running',
    });
  });
}

// Handle requests to routes that do not exist.
app.use(notFound);

// Handle unexpected server errors.
app.use(errorHandler);

export default app;
