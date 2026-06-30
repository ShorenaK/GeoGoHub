/*
  models/applicationModel.js

  This file handles MongoDB operations for membership applications.

  Responsibilities:
  - Create new membership applications.
  - Store application data in the applications collection.
  - Keep database logic separate from Express routes and controllers.

  Collection:
  - applications

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import { ObjectId } from 'mongodb';
import { getDatabase } from '../db/database.js';

const APPLICATIONS_COLLECTION = 'applications';

// Creates a new membership application in MongoDB
export async function createApplication(applicationData) {
  const db = getDatabase();

  // Add default fields before saving the application.
  const newApplication = {
    ...applicationData,
    status: 'pending',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // Insert the application into the applications collection.
  const result = await db.collection(APPLICATIONS_COLLECTION).insertOne(newApplication);

  // Return the saved application including the MongoDB generated _id.
  return {
    _id: result.insertedId,
    ...newApplication,
  };
}

// Retrieves all membership applications from MongoDB. 
export async function getAllApplications() {
  const db = getDatabase();

  // Find all documents in the applications collection.
  const applications = await db
    .collection(APPLICATIONS_COLLECTION)
    .find()
    // Note to my self --> Replace with pagination if the applications collection grows significantly in the future.
    .toArray();

  return applications;
}

// Retrieves one membership application by MongoDB _id.
export async function getApplicationById(applicationId) {
  const db = getDatabase();

  // Convert the string id from the URL into a MongoDB ObjectId.
  const objectId = new ObjectId(applicationId);

  const application = await db
    .collection(APPLICATIONS_COLLECTION)
    .findOne({ _id: objectId });

  return application;
}

// Updates an existing membership application.
export async function updateApplication(applicationId, updatedData) {
 
}

// deleteApplication()

