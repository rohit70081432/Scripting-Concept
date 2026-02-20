class BankEmployee {
    constructor(empName, id, pay) {
        this.empName = empName;
        this.id = id;
        this.pay = pay;
    }

    showDetails() {
        console.log("Name:", this.empName);
        console.log("Employee ID:", this.id);
        console.log("Salary:", this.pay);
    }
}

const employee1 = new BankEmployee("Harsh", 420, 35000);
employee1.showDetails();
