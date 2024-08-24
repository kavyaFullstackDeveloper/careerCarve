const express = require('express');
const { StudentModel } = require('../models/StudentModel');
const router = express.Router();

// POST /students - Create a new student
router.post('/students', async (req, res) => {
    const { name, availability, area_of_interest } = req.body;

    try {
        const newStudent = await StudentModel.create({
            name,
            availability,
            area_of_interest
        });
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(500).json({ message: 'Error creating student', error });
    }
});

// GET /students - Fetch all students
router.get('/students', async (req, res) => {
    try {
        const students = await StudentModel.findAll();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching students', error });
    }
});

// GET /students/:id - Fetch a single student by ID
router.get('/students/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const student = await StudentModel.findByPk(id);

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching student', error });
    }
});


// DELETE /students/:id - Delete a student by ID
router.delete('/students/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const student = await StudentModel.findByPk(id);

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        await student.destroy();
        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting student', error });
    }
});

module.exports = router;
