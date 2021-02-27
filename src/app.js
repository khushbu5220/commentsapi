const express = require("express");
require("./db/conn");
const Comment = require("./models/comments");


const app = express();
const port = process.env.PORT || 3000;


app.post("/comments", async(req,res) => {
    try {
        const user = new Comment(req.body);
        const createUser = await user.save();
        res.status(201).send(createUSer);
    } catch (e) {
       res.status(400).send(e); 
    }
})

app.get("/comments", async (req,res) => {
    try {
        const commentsData = await Comment.find();
        res.send(commentsData);
    } catch (e) {
        res.send(e);
    }
})

app.get("/comments/:id", async (req,res) => {
    try {
        const _id = req.params;
        const commentData = await Comment.findById(_id);

        if(!commentData){
            return res.status(404).send();
        }else{
            res.send(commentData);
        }

    } catch (e) {
        res.send(e);
    }
})

app.patch("/")

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})
    
