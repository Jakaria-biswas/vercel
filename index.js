const express = require('express');
const app = express()

const port =  5000

app.get("/", (req, res) => {
        res.send("the server is running")
})
app.get("/user", (req, res) => {
           res.send({"user":"jakaria biswas"})
})

app.listen(port, () => {
       console.log("server start")
})

