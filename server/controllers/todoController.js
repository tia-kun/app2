const todoModel = require('../models/todoModel')

//fetches todos from the database and then sends them as the response to the client
module.exports.getTodo = async (req, res) => {
    const todo = await todoModel.find()
    res.send(todo)
}

module.exports.createTodo = async (req, res) => {
    const {text} = req.body
    todoModel.create({text}).then((data) => {
        console.log(`Added successfully: ${data}`)
        res.send({data})
    })
}

module.exports.updateTodo = async (req, res) => {
    const {_id, text} = req.body
    todoModel.findByIdAndUpdate(_id, {text}).then(()=> res.send("Updated successfully"))
    .catch((err) => console.log(err))
}

module.exports.deleteTodo = async (req, res) => {
    const {_id} = req.body
    todoModel.findByIdAndDelete(_id).then(()=> res.send("Deleted successfully"))
    .catch((err) => console.log(err))
}