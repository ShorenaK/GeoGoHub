/*
  models/rsvpModel.js

  This file handles MongoDB operations for event RSVPs.

  Responsibilities:
  - Create new RSVPs.
  - Read RSVPs.
  - Update RSVPs.
  - Delete RSVPs.

  Collection:
  - rsvps

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/
/*
  models/rsvpModel.js

  This file handles MongoDB operations for event RSVPs.

  Responsibilities:
  - Create new RSVPs.
  - Read RSVPs.
  - Update RSVPs.
  - Delete RSVPs.

  Collection:
  - rsvps

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import { ObjectId } from 'mongodb';
import { getDatabase } from '../db/database.js';

const RSVPS_COLLECTION = 'rsvps';

// Creates a new RSVP in MongoDB.
export async function createRsvp(rsvpData) {
  const db = getDatabase();

  const newRsvp = {
    ...rsvpData,
    status: rsvpData.status || 'going',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const result = await db.collection(RSVPS_COLLECTION).insertOne(newRsvp);

  return {
    _id: result.insertedId,
    ...newRsvp,
  };
}

// Retrieves all RSVPs from MongoDB.
export async function getAllRsvps() {
  const db = getDatabase();

  // TODO: Replace with pagination if the RSVPs collection grows significantly.
  const rsvps = await db.collection(RSVPS_COLLECTION).find().toArray();

  return rsvps;
}

// Retrieves one RSVP by MongoDB _id.
export async function getRsvpById(rsvpId) {
  const db = getDatabase();

  const objectId = new ObjectId(rsvpId);

  const rsvp = await db.collection(RSVPS_COLLECTION).findOne({
    _id: objectId,
  });

  return rsvp;
}

// Updates an existing RSVP.
export async function updateRsvp(rsvpId, updatedData) {
  const db = getDatabase();

  const objectId = new ObjectId(rsvpId);

  updatedData.updatedAt = new Date();

  const result = await db.collection(RSVPS_COLLECTION).updateOne(
    { _id: objectId },
    {
      $set: updatedData,
    },
  );

  return result;
}

// Deletes an RSVP by MongoDB _id.
export async function deleteRsvp(rsvpId) {
  const db = getDatabase();

  const objectId = new ObjectId(rsvpId);

  const result = await db.collection(RSVPS_COLLECTION).deleteOne({
    _id: objectId,
  });

  return result;
}
