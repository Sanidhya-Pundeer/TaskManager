const mongoose = require("mongoose")

const url = "mongodb+srv://admin:scott@cluster0.hdi59tb.mongodb.net/Sandy?retryWrites=true&w=majority"

const connection=()=>{
    mongoose.connect(url).then(()=>{
        console.log("Connection Successfully established");
    }).catch((error)=>{
        console.log("Connection Failure",error);
    });
}

module.exports = connection