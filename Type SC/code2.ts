import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Class
class Student {
  name: string;
  marks: number;

  constructor(name: string, marks: number) {
    this.name = name;
    this.marks = marks;
  }

  // Method using switch statement
  getGrade(): string {
    let gradeCategory: string;

    switch (true) {
      case this.marks >= 90:
        gradeCategory = "A";
        break;
      case this.marks >= 75:
        gradeCategory = "B";
        break;
      case this.marks >= 60:
        gradeCategory = "C";
        break;
      case this.marks >= 40:
        gradeCategory = "D";
        break;
      default:
        gradeCategory = "F";
    }

    return gradeCategory;
  }
}

// Function
function startApp(): void {
  rl.question("Enter student name: ", (name) => {
    rl.question("Enter marks: ", (marksInput) => {
      const marks = parseInt(marksInput);

      // Object creation
      const student = new Student(name, marks);

      console.log("\n----- Result -----");
      console.log(`Name: ${student.name}`);
      console.log(`Marks: ${student.marks}`);
      console.log(`Grade: ${student.getGrade()}`);

      rl.close();
    });
  });
}

startApp();