const StudentsService = require("../../lib/services/StudentsService");
describe("Test para Students Service", () => {
    test("Requerimiento 1: consultar todos los estudiantes con todos sus campos", () => {
        const estudiante = [{ id: "6264d5d89f1df827eb84bb23", name: "Warren", email: "Todd@visualpartnership.xyz", creditS: 500 }]
        const getStudent = StudentsService.getStudentsAll(estudiante);
        expect(getStudent).toBe(estudiante);
    });
});