/*
  models/rsvpModel.js

  This file handles MongoDB operations for event RSVPs.

  Responsibilities:
  - Create RSVPs connected to users and events.
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

// Create a new RSVP.
export async function createRsvp(rsvpData) {
  const db = getDatabase();

  const newRsvp = {
    userId: new ObjectId(rsvpData.userId),
    eventId: new ObjectId(rsvpData.eventId),
    status: rsvpData.status || 'going',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const result = await db
    .collection(RSVPS_COLLECTION)
    .insertOne(newRsvp);

  return {
    _id: result.insertedId,
    ...newRsvp,
  };
}

// Find an RSVP for a particular user and event.
export async function getRsvpByUserAndEvent(userId, eventId) {
  const db = getDatabase();

  return db.collection(RSVPS_COLLECTION).findOne({
    userId: new ObjectId(userId),
    eventId: new ObjectId(eventId),
  });
}

// Retrieve RSVPs for one authenticated user.
export async function getRsvpsByUserId(userId) {
  const db = getDatabase();

  return db
    .collection(RSVPS_COLLECTION)
    .find({
      userId: new ObjectId(userId),
    })
    .toArray();
}

// Retrieve all RSVPs.
export async function getAllRsvps() {
  const db = getDatabase();

  return db.collection(RSVPS_COLLECTION).find().toArray();
}

// Retrieve one RSVP by ID.
export async function getRsvpById(rsvpId) {
  const db = getDatabase();

  return db.collection(RSVPS_COLLECTION).findOne({
    _id: new ObjectId(rsvpId),
  });
}

// Update an RSVP.
export async function updateRsvp(rsvpId, updatedData) {
  const db = getDatabase();

  return db.collection(RSVPS_COLLECTION).updateOne(
    {
      _id: new ObjectId(rsvpId),
    },
    {
      $set: {
        ...updatedData,
        updatedAt: new Date(),
      },
    },
  );
}

// Delete an RSVP.
export async function deleteRsvp(rsvpId) {
  const db = getDatabase();

  return db.collection(RSVPS_COLLECTION).deleteOne({
    _id: new ObjectId(rsvpId),
  });
}