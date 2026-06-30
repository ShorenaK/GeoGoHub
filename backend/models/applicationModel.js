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




// getAllApplications()

// getApplicationById()

// updateApplication()

// deleteApplication()

