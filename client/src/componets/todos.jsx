
import { useEffect } from "react";
import { deleteTodo, getAllTodos } from "../redux/actions";
import { ALL_TODOS, ACTIVE_TODO, DONE_TODO } from "../redux/actions/type";
import { useDispatch, useSelector } from "react-redux";
// component
import { Todo } from './todo';
import { Tabs } from './tabs';



const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)
    const currentTab = useSelector(state => state.currentTab)

    useEffect(() => {
        dispatch(getAllTodos());

    }, [dispatch])


    const getTodos = () => {
        if (currentTab === ALL_TODOS) {
            return todos;
        } else if (currentTab === ACTIVE_TODO) {
            return todos.filter(todo => !todo.done)
        } else if (currentTab === DONE_TODO) {
            return todos.filter(todo => todo.done)
        }

    }
    const removeDoneTodos = () => {
        todos.forEach(({ done, _id }) => {
            if (done) {
                dispatch(deleteTodo(_id));
            }
        })
    }

    return (
        <article>
            <div>
                <Tabs currentTab={currentTab} />
                {

                    todos.some(todo=>todo.done)?(
                        <button
                        onClick={removeDoneTodos}
                        className="button clear"
                        >
                            
                            REMOVE DONE TODOS
                            
                            </button>
                    ): null  
                }

            </div>
            <ul className="todo-list">
                {

                    getTodos().map(todo => (
                        <li><Todo
                            key={todo._id}
                            todo={todo}
                        /></li>
                    ))
                }
            </ul>
        </article>

    )


}

export default Todos;