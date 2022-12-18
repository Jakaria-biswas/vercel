const express = require('express');
const app = express()

const port =  50000

app.get("/", (req, res) => {
        res.send("the server is running")
})

app.listen(port, () => {
       console.log("server start")
})

