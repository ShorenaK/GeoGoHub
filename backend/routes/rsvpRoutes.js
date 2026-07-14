/*
  routes/rsvpRoutes.js

  This file defines API routes for event RSVPs.

  Responsibilities:
  - Connect RSVP URLs to controller functions.
  - Define CRUD endpoints for the rsvps collection.

  Collection:
  - rsvps

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import express from 'express';

import {
  createRsvpController,
  deleteRsvpController,
  getAllRsvpsController,
  getCurrentUserRsvpsController,
  getRsvpByIdController,
  updateRsvpController,
} from '../controllers/rsvpController.js';

import {
  requireAdmin,
  requireMember,
} from '../middleware/authMiddleware.js';

const router = express.Router();

// Approved members can create and view their own RSVPs.
router.post('/', requireMember, createRsvpController);
router.get('/mine', requireMember, getCurrentUserRsvpsController);

// Only administrators can retrieve every RSVP.
router.get('/', requireAdmin, getAllRsvpsController);

// Approved members can manage individual RSVPs.
router.get('/:id', requireMember, getRsvpByIdController);
router.put('/:id', requireMember, updateRsvpController);
router.delete('/:id', requireMember, deleteRsvpController);

export default router;