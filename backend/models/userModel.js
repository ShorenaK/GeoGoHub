/*
  models/userModel.js

  This file handles MongoDB operations for GeoGoHub users.

  Responsibilities:
  - Create new users.
  - Read users.
  - Update users.
  - Delete users.

  Collection:
  - users

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import { ObjectId } from 'mongodb';
import { getDatabase } from '../db/database.js';

const USERS_COLLECTION = 'users';

