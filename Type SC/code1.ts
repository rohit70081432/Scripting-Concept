import * as readline from "readline";

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Class
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method with conditional statement
  getStatus(): string {
    if (this.age >= 18) {
      return "You are an Adult.";
    } else {
      return "You are a Minor.";
    }
  }
}

// Function
function startApp(): void {
  rl.question("Enter your name: ", (name) => {
    rl.question("Enter your age: ", (ageInput) => {
      const age = parseInt(ageInput);

      // Object creation
      const user = new User(name, age);

      console.log("\n----- Result -----");
      console.log(`Name: ${user.name}`);
      console.log(`Age: ${user.age}`);
      console.log(user.getStatus());

      rl.close();
    });
  });
}

startApp();