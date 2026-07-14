/*
  controllers/applicationController.js

  This file handles request and response logic for membership applications.

  Responsibilities:
  - Receive application requests from routes.
  - Call application model functions.
  - Send JSON responses back to the client.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import {
  createApplication,
  deleteApplication,
  getAllApplications,
  getApplicationByEmail,
  getApplicationById,
  updateApplication,
} from '../models/applicationModel.js';

// Handles creating a new membership application.
export async function createApplicationController(req, res) {
  try {
    const {
      firstName,
      lastName,
      email,
      profession,
      company,
      reason,
    } = req.body;

    // Validate required fields.
    if (
      !firstName ||
      !lastName ||
      !email ||
      !profession ||
      !reason
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please complete all required fields.',
      });
    }

    // Normalize the email before validation and database checks.
    const normalizedEmail = email.trim().toLowerCase();

    // Validate email format.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(normalizedEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.',
      });
    }

    // Check whether this email already has an application.
    const existingApplication =
      await getApplicationByEmail(normalizedEmail);

    if (existingApplication) {
      return res.status(409).json({
        success: false,
        message:
          'A membership application has already been submitted with this email address.',
      });
    }

    // Trim and normalize values before saving.
    const application = await createApplication({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: normalizedEmail,
      profession: profession.trim(),
      company: company ? company.trim() : '',
      reason: reason.trim(),
    });

    return res.status(201).json({
      success: true,
      data: application,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to create application.',
      error: error.message,
    });
  }
}

// Handles retrieving all membership applications.
export async function getAllApplicationsController(req, res) {
  try {
    const applications = await getAllApplications();

    res.status(200).json({
      success: true,
      data: applications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to get applications.',
      error: error.message,
    });
  }
}

// Handles retrieving one membership application by ID.
export async function getApplicationByIdController(req, res) {
  try {
    const application = await getApplicationById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found.',
      });
    }

    return res.status(200).json({
      success: true,
      data: application,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to get application.',
      error: error.message,
    });
  }
}

// Handles updating an existing membership application.
export async function updateApplicationController(req, res) {
  try {
    const result = await updateApplication(req.params.id, req.body);

    if (result.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'Application not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Application updated successfully.',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to update application.',
      error: error.message,
    });
  }
}

// Handles deleting a membership application.
export async function deleteApplicationController(req, res) {
  try {
    const result = await deleteApplication(req.params.id);

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'Application not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Application deleted successfully.',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to delete application.',
      error: error.message,
    });
  }
}
