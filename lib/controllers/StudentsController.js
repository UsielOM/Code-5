const StudentsService = require("./../services/StudentsService");
const Reader = require("../utils/Reader");
class ExplorerController {

    static getStudentsAllService() {
        const students = Reader.readJsonFile("alumnos.json");

        return StudentsService.getStudentsAll(students);
    }
}

module.exports = ExplorerController;