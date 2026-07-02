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

import { requireAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Create a new user.
router.post('/', createUserController);

// Only administrators can manage users.
router.get('/', requireAdmin, getAllUsersController);
router.get('/:id', requireAdmin, getUserByIdController);
router.put('/:id', requireAdmin, updateUserController);
router.delete('/:id', requireAdmin, deleteUserController);

export default router;
