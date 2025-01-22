function Student(name, gender, age) {
     this.name = name;
     this.gender = gender;
     this.age = age;
     this.marks = [];
}

let studentIvan = new Student('Иван', 'мужской', 19);

Student.prototype.setSubject = function (subjectName) {
   this.subject = subjectName;  
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks === undefined) {
    return;
  }
  this.marks.push(...marks); 
}

Student.prototype.getAverage = function () {
    if (this.marks.length < 1 || this.marks === undefined) {
      return 0;
    }
    return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;      
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.marks;
  delete this.subject;
}
