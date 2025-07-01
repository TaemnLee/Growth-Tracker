//=========================================================
// File: pages/api/reflections.js
// Author: Taemin Lee
// Date: 2025-06-01
//
// Description:
// API route handler for /api/reflections in a Next.js application.
//
// Supports:
//   - POST: Create and save a new reflection to MongoDB
//   - GET: Retrieve all saved reflections (sorted by most recent)
//
// Dependencies:
//   - Uses the MongoDB client promise from @/lib/mongodb
//
// Notes:
//   - Returns appropriate status codes and error messages
//   - Rejects invalid POST data with 400 status
//   - Catches and handles database errors (500)
//   - Restricts other HTTP methods with 405 status
//
//=========================================================

import clientPromise from '@/lib/mongodb' // Import the MongoDB client promise

/**
 * API Route Handler for /api/reflections
 * Supports:
 * - POST: Add a new reflection to the database
 * - GET: Fetch all reflections from the database
 */
export default async function handler(req, res) {
  const client = await clientPromise // Wait for MongoDB client connection
  const db = client.db('growth-tracker') // Specify the database name
  const collection = db.collection('reflections') // Access the 'reflections' collection

  // Handle POST request: Save new reflection
  if (req.method === 'POST') {
    try {
      const { text } = req.body // Destructure 'text' from request body

      // Validate input
      if (!text || typeof text !== 'string') {
        return res.status(400).json({ success: false, error: 'Invalid reflection text.' })
      }

      // Build new reflection object
      const newReflection = {
        text,
        createdAt: new Date(),
      }

      // Insert into MongoDB
      const result = await collection.insertOne(newReflection)

      return res.status(201).json({ success: true, insertedId: result.insertedId })
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message })
    }
  }

  // Handle GET request: Retrieve all reflections
  if (req.method === 'GET') {
    try {
      const reflections = await collection
        .find({}) // Get all reflections
        .sort({ createdAt: -1 }) // Newest first
        .toArray() // Convert cursor to array

      return res.status(200).json({ success: true, reflections })
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message })
    }
  }

  // If not GET or POST, respond with 405 Method Not Allowed
  res.setHeader('Allow', ['GET', 'POST'])
  return res.status(405).json({ message: `Method ${req.method} not allowed` })
}
