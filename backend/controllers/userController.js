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

// Handles creating a new user.
export async function createUserController(req, res) {
  try {
    const user = await createUser(req.body);

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create user.',
      error: error.message,
    });
  }
}

// Handles retrieving all users.
export async function getAllUsersController(req, res) {
  try {
    const users = await getAllUsers();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to get users.',
      error: error.message,
    });
  }
}

// Handles retrieving one user by ID.
export async function getUserByIdController(req, res) {
  try {
    const user = await getUserById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found.',
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to get user.',
      error: error.message,
    });
  }
}

// Handles updating an existing user.
export async function updateUserController(req, res) {
  try {
    const result = await updateUser(req.params.id, req.body);

    if (result.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'User not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'User updated successfully.',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to update user.',
      error: error.message,
    });
  }
}

// Handles deleting a user.
export async function deleteUserController(req, res) {
  try {
    const result = await deleteUser(req.params.id);

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'User not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'User deleted successfully.',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to delete user.',
      error: error.message,
    });
  }
}
