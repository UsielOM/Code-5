const ExplorerController = require("./controllers/ExplorerController");
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