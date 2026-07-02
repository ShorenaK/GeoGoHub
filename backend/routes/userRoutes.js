/*
  routes/userRoutes.js

  This file defines API routes for GeoGoHub users.

  Responsibilities:
  - Connect user URLs to controller functions.
  - Define CRUD endpoints for the users collection.

  Collection:
  - users

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import express from 'express';

import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  getUserByIdController,
  updateUserController,
} from '../controllers/userController.js';

const router = express.Router();

// Create a new user.
router.post('/', createUserController);

// Get all users.
router.get('/', getAllUsersController);

// Get one user by ID.
router.get('/:id', getUserByIdController);

// Update one user by ID.
router.put('/:id', updateUserController);

// Delete one user by ID.
router.delete('/:id', deleteUserController);

export default router;
