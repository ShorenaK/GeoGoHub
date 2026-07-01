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

const router = express.Router();

router.post('/', createRsvpController);
router.get('/', getAllRsvpsController);
router.get('/:id', getRsvpByIdController);
router.put('/:id', updateRsvpController);
router.delete('/:id', deleteRsvpController);

export default router;
