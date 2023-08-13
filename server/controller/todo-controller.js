import todo from "../model/todo.js";

export const addtodo = async (request, response) => {
  try {
    const newTodo = await todo.create({
      data: request.body.data,
      createdAt: Date.now(),
    });
    return response.status(200).json(newTodo);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};

export const getAllTodos = async (request, response) => {
  try {
    const todos = await todo.find().sort({ createdAt: -1 });
    return response.status(200).json(todos);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};

export const toggleTodoDone = async (request, response) => {
  try {
    const todoId = request.params.id;
    const todoRef = await todo.findById(todoId);

    if (!todoRef) {
      return response.status(404).json({ message: 'Todo not found' });
    }

    todoRef.done = !todoRef.done;
    await todoRef.save();

    return response.status(200).json(todoRef);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};

export const updateTodo = async (request, response) => {
    try {
      const updatedTodo = await todo.findByIdAndUpdate(
        {_id:request.params.id},
        { data: request.body.data },
        { new: true } 
      );
  
      if (!updatedTodo) {
        return response.status(404).json({ message: 'Todo not found' });
      }
  
      return response.status(200).json(updatedTodo);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  };
  

  export const deleteTodo = async (request, response) => {
      try {
          const deletedTodo = await todo.findByIdAndDelete(request.params.id);
  
          return response.status(200).json(deletedTodo);
      } catch (error) {
          return response.status(500).json({ error: error.message });
      }
  };
  