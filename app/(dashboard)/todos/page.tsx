import TodoList from '@/components/TodoList';

import db from '@/utils/db';

const getData = async() => {
    // await new Promise((resolve,reject) => setTimeout(() => resolve(), 2000));  // Simulating a delay for demonstration purposes
    const todos = await db.todo.findMany({})
    return todos;
}

const TodosPage = async () => {
    // const [todos, setTodos] = useState(getData());
    const todos = await getData();
    return <div> 
        <TodoList todos = {todos} />
    </div>
}

export default TodosPage;