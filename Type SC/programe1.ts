
function checkResult(marks: number): string {
    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }
}


class Student {
    name: string;
    marks: number;


    constructor(name: string, marks: number) {
        this.name = name;
        this.marks = marks;
    }


    display(): void {
        console.log("Name: " + this.name);
        console.log("Marks: " + this.marks);
        console.log("Result: " + checkResult(this.marks));
    }
}


let s1 = new Student("Ram", 78);
let s2 = new Student("Seeta ", 30);


s1.display();
console.log("-------------");
s2.display();
