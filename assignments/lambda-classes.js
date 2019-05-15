// CODE here for your Lambda Classes

class Person {
    constructor(name, age, location, gender) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.gender = gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name} , I am from ${this.location}`)
    }
}


class Instructor extends Person {
    constructor(name, age, location, gender, specialty, favLanguage, catchPhrase) {
        super(name, age, location, gender);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(name, age, location, gender, previousBackground, className) {
        super(name, age, location, gender);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = ['Html', 'CSS', 'JavaScript'];
    }

    listsSubjects() {
        for(let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }

}

class ProjectManager extends Instructor {
    constructor(name, age, location, gender, gradClassName, favInstructor) {
        super(name, age, location, gender);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}


let john = new Person('John Doe', '100', '127.0.0.1', 'M');
john.speak(); //


let gabe = new Instructor('Gabriel', '38', 'UK', 'M', 'JavaScript', 'Python', 'Keep pushing');
gabe.speak();
gabe.demo('JavaScript IV');


let jane = new Student('Jane Doe', '123', '127.0.0.1', 'F')
jane. listsSubjects();
jane.sprintChallenge('HTML');
jane.PRAssignment('JavaScript');
gabe.grade({name:'Timileyin Ojo'},'JavaScript');


let borja = new ProjectManager('Borja', '28', 'Catalonia', 'M');
borja.standUp('WEBEU2-borja');
borja.debugsCode({name:'Benjamin'}, 'JavaScript IV');