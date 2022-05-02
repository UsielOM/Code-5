class StudentsService {

    static getStudentsAll(students) {

        const studentsAll = students;

        return studentsAll;
    }

    static getEmailStudents(students) {
        const studentsCertification = students.filter((student) => student.haveCertification == true);

        const studentEamil = studentsCertification.map((student) => student.email);

        return studentEamil;

    }

    static getStudentCredit(students) {


        const studentsCredit = students.filter((student) => student.credits >= 500);



        const studentCreditReturn = studentsCredit.map((student) => student.name);

        return studentCreditReturn;

    }
}


module.exports = StudentsService;