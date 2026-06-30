/*
  routes/applicationRoutes.js

  This file defines API routes for membership applications.

  Responsibilities:
  - Connect application URLs to controller functions.
  - Define CRUD endpoints for the applications collection.

  Collection:
  - applications

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import express from 'express';

import {
  createApplicationController,
  deleteApplicationController,
  getAllApplicationsController,
  getApplicationByIdController,
  updateApplicationController,
} from '../controllers/applicationController.js';

const router = express.Router();

// Create a new membership application.
router.post('/', createApplicationController);

// Get all membership applications.
router.get('/', getAllApplicationsController);

// Get one membership application by id.
router.get('/:id', getApplicationByIdController);

// Update one membership application by id.
router.put('/:id', updateApplicationController);

// Delete one membership application by id.
router.delete('/:id', deleteApplicationController);

export default router;