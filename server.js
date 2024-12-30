const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');  // Import the cors package
const connectDB = require('./config/connectDB'); // Import the connectDB function
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Enable CORS
app.use(cors());  // Use CORS middleware to allow all origins by default

app.use(express.json());
app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes); // login reg

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
