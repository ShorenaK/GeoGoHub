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
