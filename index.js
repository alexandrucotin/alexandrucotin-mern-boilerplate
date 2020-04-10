const express = require('express');
const mongoose = require('mongoose');

const app = express();


// 
app.get('/', (req,res) => {
    res.send("Welcome");
});

mongoose.connect('mongodb+srv://admin:admin@cluster0-cnkkh.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Database connected!"))
.catch((err) => console.log(err));


app.listen(5000);