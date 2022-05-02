const StudentsService = require("./../services/StudentsService");
const Reader = require("./../utils/Reader");
class ExplorerController {

    static getStudentsAllService(students) {
        const studentsArray = Reader.readJsonFile("alumnos");
        students = studentsArray
        return StudentsService.getStudentsAll(students);
    }
}

module.exports = ExplorerController;