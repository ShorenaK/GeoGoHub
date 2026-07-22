/* Great job with all route files. Every route is clearly defined, well-organized, and every endpoint functions as expected when demoing your website and API calls and the use of global comments is well done as well! */
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

import { requireAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Create a new membership application.
router.post('/', createApplicationController);

router.get('/', requireAdmin, getAllApplicationsController);
router.get('/:id', requireAdmin, getApplicationByIdController);
router.put('/:id', requireAdmin, updateApplicationController);
router.delete('/:id', requireAdmin, deleteApplicationController);

export default router;
