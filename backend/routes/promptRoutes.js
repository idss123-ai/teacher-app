// backend/routes/promptRoutes.js
// Definira URL putanju za generiranje AI odgovora

const express = require('express');
const router = express.Router();
const { generatePrompt } = require('../services/aiService');

// POST zahtjev: /api/prompts/generate
router.post('/generate', generatePrompt);

module.exports = router;
