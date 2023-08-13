
import './App.css';
// componets
import Header from './componets/header.jsx';
import TodoForm from './componets/todo_form';
import Todos from './componets/todos';

function App() {
  return (
    <div >
      <Header/>
      <TodoForm/>
      <Todos/>
    </div>
  );
}

export default App;
