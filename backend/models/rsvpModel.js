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

}

// Retrieves all RSVPs from MongoDB.
export async function getAllRsvps() {

}

// Retrieves one RSVP by MongoDB _id.
export async function getRsvpById(rsvpId) {

}

// Updates an existing RSVP.
export async function updateRsvp(rsvpId, updatedData) {

}

// Deletes an RSVP by MongoDB _id.
export async function deleteRsvp(rsvpId) {
 
}