const {Router} = require('express')
const {getTodo, createTodo, updateTodo, deleteTodo} = require('../controllers/todoController')


const router = Router()

//defines route handlers for the HTTP GET (to retrieve data from server)/POST (to submit data to server) methods
//when a client makes a GET request to the root url, the getTodo function will be executed to handle the request
router.get('/', getTodo)
//when a client makes a POST request to this endpoint, the createTodo function will be executed to handle the request
router.post('/create', createTodo)
router.post('/update', updateTodo)
router.post('/delete', deleteTodo)

module.exports = router