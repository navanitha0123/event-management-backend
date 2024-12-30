const express = require('express');
const { createEvent, getAllEvents } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createEvent);
router.get('/', getAllEvents);

module.exports = router;
