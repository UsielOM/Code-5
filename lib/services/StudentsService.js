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
}


module.exports = StudentsService;