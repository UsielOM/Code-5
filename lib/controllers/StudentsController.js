const StudentsService = require("./../services/StudentsService");
const Reader = require("./../utils/Reader");
class ExplorerController {

    static getStudentsAllService(students) {
        const students = Reader.readJsonFile("alumnos");
        return StudentsService.getStudentsAll(students);
    }
}

module.exports = ExplorerController;