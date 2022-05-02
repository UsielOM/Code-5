const StudentsController = require("./controllers/StudentsController");
const express = require("express");

const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
    console.log(`Students API in localhost:${port}`);
});

app.get("/", (request, response) => {
    response.json({ message: "Students Api welcome!" });
});

app.get("/v1/students", (request, response) => {
    const studentsExpress = StudentsController.getStudentsAllService();
    response.json(studentsExpress);
});

app.get("/v1/students/haveCertification", (request, response) => {
    const studentEmail = StudentsController.getStudentsEmail();
    response.json(studentEmail);

});