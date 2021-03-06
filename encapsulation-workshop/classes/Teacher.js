class Teacher {
    constructor(name, initials, subject) {
        this.name = name;
        this.initials = initials;
        this.subject = subject;
        this.yearsOfService = 0;
    }

    getName = () => {
        return this.name
    }

    getInitials = () => {
        return this.initials
    }

    getSubject = () => {
        return this.initials
    }

    getYearsService = () => {
        return this.yearsOfService
    }

    setYearsService = (years) => {
        this.yearsOfService = years
    }
}

module.exports = Teacher;