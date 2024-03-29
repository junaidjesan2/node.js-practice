const express = require("express");
const app = express();
const port = 5000;
let data = [
  {
    id: 1,
    name: "John Doe",
    class: "A",
    department: "Computer Science",
    study_year: 2,
  },
  {
    id: 2,
    name: "Jane Smith",
    class: "B",
    department: "Electrical Engineering",
    study_year: 3,
  },
  {
    id: 3,
    name: "Alice Johnson",
    class: "C",
    department: "Physics",
    study_year: 1,
  },
  {
    id: 4,
    name: "Bob Williams",
    class: "D",
    department: "Mathematics",
    study_year: 4,
  },
  {
    id: 5,
    name: "Charlie Brown",
    class: "A",
    department: "Chemistry",
    study_year: 2,
  },
  {
    id: 6,
    name: "Diana Miller",
    class: "B",
    department: "Mechanical Engineering",
    study_year: 3,
  },
  {
    id: 7,
    name: "Ethan Davis",
    class: "C",
    department: "Biology",
    study_year: 1,
  },
  {
    id: 8,
    name: "Fiona Wilson",
    class: "D",
    department: "Geology",
    study_year: 4,
  },
  {
    id: 9,
    name: "George White",
    class: "A",
    department: "Environmental Science",
    study_year: 2,
  },
  {
    id: 10,
    name: "Hannah Carter",
    class: "B",
    department: "Civil Engineering",
    study_year: 3,
  },
];
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.status(404).end("Page not found...");
});
app.get("/allStudents", (req, res) => {
  res.send(data).status(200).end("Data Successfully get")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
