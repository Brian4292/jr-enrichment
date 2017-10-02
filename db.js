const Sequelize = require('sequelize');


const db = new Sequelize('postgres://localhost/juniorenrichment', {
  logging: false
});


const Student = db.define('student', {
	name: {type: Sequelize.STRING},
	GPA: {type: Sequelize.FLOAT}

})
	

const Teacher = db.define('teacher', {
	/* TEACHER MODEL CODE HERE */
	name: {type: Sequelize.STRING},
	subject: {type: Sequelize.STRING}
});

Student.findFour = function(){
	return this.findAll({
		where:{
			GPA:4.0
		}
	})
}

Student.belongsTo(Teacher)

//class method
Student.prototype.getGPA = function(){
	if (this.GPA ===4){
		return 'A';
	}
	else return 'filler';
}


let Foundstudent;
Student.findById(2)
.then(student => {
	Foundstudent = student
	return Teacher.findById(1)
})
.then(teacher => {
	//console.dir(studentTeacher)
	//return Foundstudent.forEach(el=>{
		Foundstudent.setTeacher(teacher);
	//})
})


module.exports = {db, Student, Teacher}