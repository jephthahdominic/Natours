const fs = require("fs")
const express = require("express");
const app = express();
const port = 3000;

const tours = JSON.parse(fs.readFileSync(`${__dirname}/data/tours-simple.json`))


app.get("/api/v1/tours", (req, res) => {
    res.status(200).json({
        status:"success",
        data:{
            tours:tours
        }
    })
})

app.listen(port, () => {
    console.log(`App is now running and is listening on port ${port}`);
})