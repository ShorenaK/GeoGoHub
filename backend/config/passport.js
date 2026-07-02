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