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

// Handles creating a new curated event.
export async function createEventController(req, res) {
  try {
    const event = await createEvent(req.body);

    res.status(201).json({
      success: true,
      data: event,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create event.',
      error: error.message,
    });
  }
}

// Handles retrieving all curated events.
export async function getAllEventsController(req, res) {
  try {
    const events = await getAllEvents();

    res.status(200).json({
      success: true,
      data: events,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to get events.',
      error: error.message,
    });
  }
}

// Handles retrieving one curated event by ID.
export async function getEventByIdController(req, res) {
 
}

// Handles updating an existing curated event.
export async function updateEventController(req, res) {
 
}

// Handles deleting a curated event.
export async function deleteEventController(req, res) {

}