// backend/config/db.js
// This file connects to the database

const { PrismaClient } = require('@prisma/client');

// Create a singleton instance of PrismaClient
const prisma = new PrismaClient();

// Function to connect to the database
async function connectDB() {
  try {
    await prisma.$connect();
    console.log('🟢 Database connected successfully');
  } catch (error) {
    console.error('🔴 Database connection failed:', error.message);
    process.exit(1); // Stop the app if DB fails
  }
}

module.exports = connectDB;
