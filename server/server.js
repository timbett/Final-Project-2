const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/results", (req, res) => {
    res.send(JSON.stringify(data, null, 3))
})

const data = [
    {
    "studentName" : "Kisang Eric",
    "rollNumber" : "1001",
    "marks" : "90",
    "status" : "Pass"
},
{
    "studentName" : "Kisang Eric",
    "rollNumber" : "1001",
    "marks" : "90",
    "status" : "Pass"
},
{
    "studentName" : "Kisang Eric",
    "rollNumber" : "1001",
    "marks" : "90",
    "status" : "Pass"
},
{
    "studentName" : "Kisang Eric",
    "rollNumber" : "1001",
    "marks" : "90",
    "status" : "Pass"
},
   {
    "studentName" : "Kisang Eric",
    "rollNumber" : "1001",
    "marks" : "90",
    "status" : "Pass"
},
]

app.listen(3030, () => {
    console.log(`Listening on port 3030`)
})