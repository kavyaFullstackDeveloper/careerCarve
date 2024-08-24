const express = require('express');
const { MentorModel } = require('../models/MentorModel');
const router = express.Router();

// GET /mentors - Fetch available mentors
router.get('/mentors', async (req, res) => {
    try {
        const mentors = await MentorModel.findAll();
        res.json(mentors);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching mentors', error });
    }
});

// DELETE /mentors/:id - Delete a mentor by ID
router.delete('/mentors/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const mentor = await MentorModel.findByPk(id);

        if (!mentor) {
            return res.status(404).json({ message: 'Mentor not found' });
        }

        await mentor.destroy();
        res.json({ message: 'Mentor deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting mentor', error });
    }
});

module.exports = router;
