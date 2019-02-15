var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function test(p) {
    return 'hello,' + p.firstName + '·' + p.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = test(user);
//# sourceMappingURL=test.js.map