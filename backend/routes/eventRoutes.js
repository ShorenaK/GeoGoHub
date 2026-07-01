/*
  routes/eventRoutes.js

  This file defines API routes for curated club events.

  Responsibilities:
  - Connect event URLs to controller functions.
  - Define CRUD endpoints for the events collection.

  Collection:
  - events

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import express from 'express';

import {
  createEventController,
  deleteEventController,
  getAllEventsController,
  getEventByIdController,
  updateEventController,
} from '../controllers/eventController.js';

const router = express.Router();