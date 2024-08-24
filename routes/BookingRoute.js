const express = require('express');
const { BookingModel } = require('../models/BookingModel');
const { MentorModel } = require('../models/MentorModel');
const { StudentModel } = require('../models/StudentModel');
const router = express.Router();

// POST /bookings - Create a new booking
router.post('/bookings', async (req, res) => {
    const { student_id, mentor_id, duration, start_time, end_time, cost } = req.body;
    
    try {
        const booking = await BookingModel.create({
            student_id,
            mentor_id,
            duration,
            start_time,
            end_time,
            cost
        });
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ message: 'Error creating booking', error });
    }
});

// GET /bookings - Retrieve bookings for a student or mentor
router.get('/bookings', async (req, res) => {
    const { student_id, mentor_id } = req.query;
    const whereClause = {};

    if (student_id) whereClause.student_id = student_id;
    if (mentor_id) whereClause.mentor_id = mentor_id;

    try {
        const bookings = await BookingModel.findAll({
            where: whereClause,
            include: [
                { model: MentorModel, as: 'mentor' },
                { model: StudentModel, as: 'student' }
            ]
        });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings', error });
    }
});

// DELETE /bookings/:id - Delete a booking by ID
router.delete('/bookings/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const booking = await BookingModel.findByPk(id);

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        await booking.destroy();
        res.json({ message: 'Booking deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting booking', error });
    }
});


module.exports = router;
