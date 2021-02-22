const express = require("express");
require("./db/conn");
const app = express();
const port = process.env.PORT || 3000;


app.post("/comments",(req,res) => {
    res.send("hello by me");
})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})
    
