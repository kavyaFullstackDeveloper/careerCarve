const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./database'); // Import the database connection


//importing routes
const MentorRoute = require('./routes/MentorRoute');
const BookingRoute = require('./routes/BookingRoute');
const StudentRoute = require('./routes/StudentRoute');

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


// Routes
app.use('/api', MentorRoute);
app.use('/api', BookingRoute);
app.use('/api', StudentRoute);


res.status(201).json({
  message: 'Booking received',
  booking: bookingData,
});


// Test Database Connection
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// Sync models with database
sequelize.sync({ force: true })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => console.log('Error: ' + err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
