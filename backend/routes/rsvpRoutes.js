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
  getRsvpByIdController,
  updateRsvpController,
} from '../controllers/rsvpController.js';

import { requireMember } from '../middleware/authMiddleware.js';

const router = express.Router();

// Only approved members can manage RSVPs.
router.post('/', requireMember, createRsvpController);
router.get('/', requireMember, getAllRsvpsController);
router.get('/:id', requireMember, getRsvpByIdController);
router.put('/:id', requireMember, updateRsvpController);
router.delete('/:id', requireMember, deleteRsvpController);

export default router;