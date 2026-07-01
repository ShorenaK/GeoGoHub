/*
  controllers/userController.js

  This file handles request and response logic for GeoGoHub users.

  Responsibilities:
  - Receive user requests from routes.
  - Call user model functions.
  - Send JSON responses back to the client.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from '../models/userModel.js';