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
  getRsvpByUserAndEvent,
  getRsvpsByUserId,
  updateRsvp,
} from '../models/rsvpModel.js';

// Handle creating a new RSVP.
export async function createRsvpController(req, res) {
  try {
    const { eventId, status } = req.body;
    const userId = req.user._id.toString();

    if (!eventId) {
      return res.status(400).json({
        success: false,
        message: 'An event ID is required.',
      });
    }

    const allowedStatuses = ['going', 'maybe', 'not going'];

    if (status && !allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid RSVP status.',
      });
    }

    const existingRsvp = await getRsvpByUserAndEvent(
      userId,
      eventId,
    );

    if (existingRsvp) {
      return res.status(409).json({
        success: false,
        message: 'You have already RSVP’d to this event.',
      });
    }

    const rsvp = await createRsvp({
      userId,
      eventId,
      status,
    });

    return res.status(201).json({
      success: true,
      data: rsvp,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to create RSVP.',
      error: error.message,
    });
  }
}

// Retrieve RSVPs belonging to the authenticated user.
export async function getCurrentUserRsvpsController(req, res) {
  try {
    const rsvps = await getRsvpsByUserId(
      req.user._id.toString(),
    );

    return res.status(200).json({
      success: true,
      data: rsvps,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to get your RSVPs.',
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
  try {
    const rsvp = await getRsvpById(req.params.id);

    if (!rsvp) {
      return res.status(404).json({
        success: false,
        message: 'RSVP not found.',
      });
    }

    return res.status(200).json({
      success: true,
      data: rsvp,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to get RSVP.',
      error: error.message,
    });
  }
}

// Handles updating an existing RSVP.
export async function updateRsvpController(req, res) {
  try {
    const result = await updateRsvp(req.params.id, req.body);

    if (result.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'RSVP not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'RSVP updated successfully.',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to update RSVP.',
      error: error.message,
    });
  }
}

// Handles deleting an RSVP.
export async function deleteRsvpController(req, res) {
  try {
    const result = await deleteRsvp(req.params.id);

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'RSVP not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'RSVP deleted successfully.',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to delete RSVP.',
      error: error.message,
    });
  }
}
