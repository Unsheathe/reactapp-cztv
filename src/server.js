// this is the proposed solution provided by jeff, to solve the CORS policy issue with the czech tv streaming

const express = require("express");
const app = express();
const PORT = 8080;
const cors = require('cors')

app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello SDI World!");
    fetch("")
        .then(response => response.json())
        .then(data => {
            res.send(data)
        })
});

//localhost GET - /pets
app.get("/pets", (req, res) => {
    //return pets data
}) 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});