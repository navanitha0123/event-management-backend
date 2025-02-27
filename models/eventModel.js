const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Event', eventSchema);


