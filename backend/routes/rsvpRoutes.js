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

router.post('/', createRsvpController);
router.get('/', getAllRsvpsController);
router.get('/:id', getRsvpByIdController);
router.put('/:id', updateRsvpController);
router.delete('/:id', deleteRsvpController);

// Only approved members can RSVP.
router.post('/', requireMember, createRsvpController);
router.put('/:id', requireMember, updateRsvpController);
router.delete('/:id', requireMember, deleteRsvpController);

// Members can view RSVPs.
// (Later we may limit this so users only see their own RSVPs.)
router.get('/', requireMember, getAllRsvpsController);
router.get('/:id', requireMember, getRsvpByIdController);

export default router;
