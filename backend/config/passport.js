/*
  config/passport.js

  This file configures Passport authentication for GeoGoHub.

  Responsibilities:
  - Configure local login strategy.
  - Find users by email.
  - Compare submitted password with stored password.
  - Serialize and deserialize users for sessions.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { ObjectId } from 'mongodb';

import { getDatabase } from '../db/database.js';

const USERS_COLLECTION = 'users';

// Configure Passport local login strategy.
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
    },
    async (email, password, done) => {
      try {
        const db = getDatabase();

        // Find the user by email.
        const user = await db.collection(USERS_COLLECTION).findOne({ email });

        if (!user) {
          return done(null, false, { message: 'Invalid email or password.' });
        }

        // it s Temporary plain-text password check for development.
        // I will replace this with hashed password comparison in the future.
        if (user.password !== password) {
          return done(null, false, { message: 'Invalid email or password.' });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    },
  ),
);
