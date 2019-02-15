class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface p {
    firstName: string;
    lastName: string;
}

function test(p:p){
	return 'hello,' + p.firstName + '·' + p.lastName
}

let user = new Student("Jane", "M.", "User")
document.body.innerHTML = test(user)
