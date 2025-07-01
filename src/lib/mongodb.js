//=========================================================
// File: lib/mongodb.js
// Author: Taemin Lee
// Date: 2025-06-01
//
// Description:
// This module sets up and manages a MongoDB connection using the official MongoDB Node.js driver.
// It exports a single promise (`clientPromise`) which resolves to a connected MongoClient instance.
// This allows other parts of the app to access the MongoDB database without repeatedly reconnecting.
//
// Key Features:
// - Uses environment variable `MONGODB_URI` for configuration.
// - Automatically caches the client connection during development to support Next.js hot reloads.
// - In production, a new MongoClient is created per invocation (as expected in serverless functions).
//
// Usage Example:
//   import clientPromise from '@/lib/mongodb'
//   const client = await clientPromise
//   const db = client.db('your-db-name')
//
// Environment Variables Required:
//   - MONGODB_URI: The full MongoDB connection string.
//
//=========================================================

import { MongoClient } from 'mongodb'

// Load MongoDB URI from environment variables
const uri = process.env.MONGODB_URI
const options = {}

let client
let clientPromise

// Fail early if the URI is missing
if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

// Use a cached MongoClient promise in development to preserve connection across hot reloads
if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect() // Create only once in development
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production, create a new MongoClient instance
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Export the client promise to be reused across the app
export default clientPromise
