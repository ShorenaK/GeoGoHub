/*
  controllers/eventController.js

  This file handles request and response logic for curated club events.

  Responsibilities:
  - Receive event requests from routes.
  - Call event model functions.
  - Send JSON responses back to the client.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEventById,
  updateEvent,
} from '../models/eventModel.js';