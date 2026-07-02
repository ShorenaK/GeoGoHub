/*
  routes/authRoutes.js

  This file defines authentication routes for GeoGoHub.

  Responsibilities:
  - Log users in with Passport.
  - Log users out.
  - Return the currently authenticated user.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import express from 'express';
import passport from '../config/passport.js';

const router = express.Router();


// Log in a user with email and password.
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Logged in successfully.',
    data: req.user,
  });
});

// Log out the current user.
router.post('/logout', (req, res, next) => {
  req.logout((error) => {
    if (error) {
      return next(error);
    }

    return res.status(200).json({
      success: true,
      message: 'Logged out successfully.',
    });
  });
});