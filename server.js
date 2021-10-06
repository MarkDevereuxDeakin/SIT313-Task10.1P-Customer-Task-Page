const express = require('express');
const bodyParser = require('body-parser');
//const http = require('http');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const validator = require("validator");
const expressValidator = require('express-validator');
const {body, check, checkSchema, validationResult} = require('express-validator');
const { join } = require("path");
const Task = require('./models/Tasks.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//mongoose
mongoose.connect('mongodb://localhost:27017/iServiceDB', {useNewUrlParser:true, useUnifiedTopology: true});

//new task route
app.route('/newtask')
.post((req, res) => {
    const task = new Task({
        type: req.body.task_type,        
        title: req.body.task_title,
        description: req.body.task_description,
        suburb: req.body.task_suburb,
        date: req.body.task_date,
        rate: req.body.task_rate,
        amount: req.body.task_amount
    });
    task.save()
    .catch((err) => console.log(err));
    res.json(('New Task Saved!'))
})

let port = 8080;
if(port == null || port == ""){
    port = 8080;
}

app.listen(port, (req, res) =>{
    console.log("Server is running on port " + port + "!");
})