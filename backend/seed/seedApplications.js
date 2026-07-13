/*
  seed/seedApplications.js

  This file seeds the applications collection.

  Collection:
  - applications

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import applications from '../data/applications.json' with { type: 'json' };

const APPLICATIONS_COLLECTION = 'applications';

// Inserts mock applications into MongoDB.
export async function seedApplications(db) {
  await db.collection(APPLICATIONS_COLLECTION).deleteMany({});
  const result = await db.collection(APPLICATIONS_COLLECTION).insertMany(applications);

  console.log(`Seeded ${result.insertedCount} applications.`);
}
