import express from 'express';
import { addtodo,getAllTodos ,toggleTodoDone,updateTodo,deleteTodo} from '../controller/todo-controller.js';



const Route=express.Router();

Route.post('/todos',addtodo)

Route.get('/todos',getAllTodos)
Route.get('/todos/:id',toggleTodoDone)
Route.put('/todos/:id',updateTodo)
Route.delete('/todos/:id',deleteTodo)

export default Route;