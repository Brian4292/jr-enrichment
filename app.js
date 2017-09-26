const express = require('express');
const app = express();

const db = require('./db').db;
const Student = require('./db').Student;
const Teacher = require('./db').Teacher;

let PORT = 8080;

db.sync()
.then(() => {
	console.log('db synced')
	app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
});