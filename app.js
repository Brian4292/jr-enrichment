const express = require('express');
const app = express();
const db = require('./db').db;
const Student = require('./db').Student;
const Teacher = require('./db').Teacher;

let PORT = 8080;
module.exports = app;

app.get("/", (req, res, next) => {
	// Visit http://localhost:8080/test to see the message!
	res.send("Hello GET Route!")
})
app.use('/teachers', require('./routes/teacher'));
app.use('/students', require('./routes/student'));


db.sync({force: false})
.then(() => {
	console.log('db synced')
	app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
});

// Student.create({
// 	name:'Brian',
// 	GPA :3.4
// })
// Student.create({
// 	name:'Greg',
// 	GPA :3.6
// })
// Student.create({
// 	name:'Clarence',
// 	GPA :3.2
// })
// Student.create({
// 	name:'Mario',
// 	GPA :4.0,
// 	teacherId: 1
// })




// Teacher.create({
// 	name: 'Mr.Corey',
// 	subject: 'Math'
// })
// Teacher.create({
// 	name: 'Mrs.Dan',
// 	subject: 'English'
// })



