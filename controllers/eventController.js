const Event = require('../models/eventModel');

// Create Event
exports.createEvent = async (req, res) => {
  const { title, description, date } = req.body;
  try {
    const event = await Event.create({
      title,
      description,
      date,
      organizer: req.user.id,
    });
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('organizer', 'name email');
    res.json(events);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};