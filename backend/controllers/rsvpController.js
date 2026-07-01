/*
  controllers/rsvpController.js

  This file handles request and response logic for event RSVPs.

  Responsibilities:
  - Receive RSVP requests from routes.
  - Call RSVP model functions.
  - Send JSON responses back to the client.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import {
  createRsvp,
  deleteRsvp,
  getAllRsvps,
  getRsvpById,
  updateRsvp,
} from '../models/rsvpModel.js';

// Handles creating a new RSVP.
export async function createRsvpController(req, res) {
  try {
    const rsvp = await createRsvp(req.body);

    res.status(201).json({
      success: true,
      data: rsvp,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create RSVP.',
      error: error.message,
    });
  }
}

// Handles retrieving all RSVPs.
export async function getAllRsvpsController(req, res) {
  try {
    const rsvps = await getAllRsvps();

    res.status(200).json({
      success: true,
      data: rsvps,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to get RSVPs.',
      error: error.message,
    });
  }
}

// Handles retrieving one RSVP by ID.
export async function getRsvpByIdController(req, res) {

}

// Handles updating an existing RSVP.
export async function updateRsvpController(req, res) {

}

// Handles deleting an RSVP.
export async function deleteRsvpController(req, res) {

}