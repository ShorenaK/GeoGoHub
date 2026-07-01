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