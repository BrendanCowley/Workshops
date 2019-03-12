class Student {
    constructor(name,form){
        this.name = name;
        this.form = form;
        this.year = parseInt(form.substring(0, form.length - 1));
    }

    getYearGroup = () => {
        return this.year;
    }

    getName = () => {
        return this.name;
    }

    getForm = () => {
        return this.form;
    }
}

module.exports = Student;