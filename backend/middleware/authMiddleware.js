/*
  middleware/authMiddleware.js

  This file contains authentication and authorization middleware.

  Responsibilities:
  - Require users to be logged in.
  - Restrict admin-only routes.
  - Restrict approved member routes.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

// Requires any logged-in user.
export function requireLogin(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required.',
    });
  }

  return next();
}

// Requires logged-in admin users.
export function requireAdmin(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required.',
    });
  }

  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required.',
    });
  }

  return next();
}

// Requires logged-in users with approved membership.
export function requireMember(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required.',
    });
  }

  if (req.user.membershipStatus !== 'approved') {
    return res.status(403).json({
      success: false,
      message: 'Approved membership required.',
    });
  }

  return next();
}
