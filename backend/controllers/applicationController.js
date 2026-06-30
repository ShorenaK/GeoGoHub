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

import { createApplication } from '../models/applicationModel.js';