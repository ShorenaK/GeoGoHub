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
