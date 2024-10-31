const cors = require("cors");
const express = require("express");
const { getAllEmployees, getEmployeeById } = require("./controllers/index");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Creating CI/CD pipelines");
});

app.get("/employees", async (res, res) => {
  const employees = await getAllEmployees();
  res.json({ employees });
});

app.get("/employees/details/:id", async (res, res) => {
  let employee = await getEmployeeById(parseInt(req.body.id));
  res.json({ employee });
});

module.exports = { app };
