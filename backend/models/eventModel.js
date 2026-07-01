/*
  models/eventModel.js

  This file handles MongoDB operations for curated club events.

  Responsibilities:
  - Create new events.
  - Read events.
  - Update events.
  - Delete events.

  Collection:
  - events

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import { ObjectId } from 'mongodb';
import { getDatabase } from '../db/database.js';

const EVENTS_COLLECTION = 'events';

// Creates a new curated event in MongoDB.
export async function createEvent(eventData) {
  const db = getDatabase();

  const newEvent = {
    ...eventData,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const result = await db.collection(EVENTS_COLLECTION).insertOne(newEvent);

  return {
    _id: result.insertedId,
    ...newEvent,
  };
}

// Retrieves all curated events from MongoDB.
export async function getAllEvents() {
  const db = getDatabase();

  // TODO: Replace with pagination if the events collection grows significantly.
  const events = await db.collection(EVENTS_COLLECTION).find().toArray();

  return events;
}

// Retrieves one curated event by MongoDB _id.
export async function getEventById(eventId) {
  const db = getDatabase();

  const objectId = new ObjectId(eventId);

  const event = await db.collection(EVENTS_COLLECTION).findOne({
    _id: objectId,
  });

  return event;
}

// Updates an existing curated event.
export async function updateEvent(eventId, updatedData) {
  const db = getDatabase();

  const objectId = new ObjectId(eventId);

  updatedData.updatedAt = new Date();

  const result = await db.collection(EVENTS_COLLECTION).updateOne(
    { _id: objectId },
    {
      $set: updatedData,
    },
  );

  return result;
}

// Deletes a curated event by MongoDB _id.
export async function deleteEvent(eventId) {
  const db = getDatabase();

  const objectId = new ObjectId(eventId);

  const result = await db.collection(EVENTS_COLLECTION).deleteOne({
    _id: objectId,
  });

  return result;
}
