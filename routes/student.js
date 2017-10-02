const express = require('express');
const router = express.Router();
const db = require('../db').db;
const Student = require('../db').Student;
const Teacher = require('../db').Teacher;
module.exports = router;

router.get('/',(req, res, next) =>{
    Student.findAll()
    .then(students =>{
        res.json(students);
    });
});

router.get('/:index/gpa', (req,res,next)=>{
    const index = req.params.index;
    Student.findById(index)
    .then(foundUser=>{
        res.send(foundUser.name +'has'+foundUser.GPA+foundUser.getGPA());
    });
});

router.get('/perfect', (req,res,next)=>{
    Student.findFour()
    .then(fourGpaStudent=>{
        res.json(fourGpaStudent);
    });
});

router.get('/:index',(req, res, next)=>{
    const index = req.params.index;
    Student.findById(index)
    .then(foundStudent => {
        res.json(foundStudent);
    });
} );



router.delete('/:index', (req, res, next) =>{
    const index = req.params.index;
    Student.findById(index)
    .then(toDelete => {
        toDelete.destroy();
        res.sendStatus(202);
    })
    .catch(next);
}); 



