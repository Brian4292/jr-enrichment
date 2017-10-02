const express = require('express');
const app = express();
const router = express.Router();
const db = require('../db').db;
const Student = require('../db').Student;
const Teacher = require('../db').Teacher;
module.exports = router;


router.get('/', (req, res, next) => {
	// Visit http://localhost:8080/test to see the message!
    Teacher.findAll()
    .then(teachers => {
        res.json(teachers);
    });
});

router.get('/:index', (req, res, next) => {
    const index = req.params.index;
    Teacher.findById(index)
    .then(foundTeacher => {
        res.json(foundTeacher);
    });

});

