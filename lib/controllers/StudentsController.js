const StudentsService = require("./../services/StudentsService");
const Reader = require("../utils/Reader");
class ExplorerController {

    static getStudentsAllService() {
        const students = Reader.readJsonFile("alumnos.json");

        return StudentsService.getStudentsAll(students);
    }

    static getStudentsEmail() {
        const students = Reader.readJsonFile("alumnos.json");

        return StudentsService.getEmailStudents(students);
    }
    static getStudentsCreditsService() {
        const students = Reader.readJsonFile("alumnos.json");

        return StudentsService.getStudentCredit(students);
    }
}

module.exports = ExplorerController;