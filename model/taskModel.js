const { default: mongoose } = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskId: String,
    title: String,
    desc:String,
    dateOfCreation:String,
    useremail:String
})

const taskModel = mongoose.model('taskData', taskSchema);

module.exports = taskModel;
