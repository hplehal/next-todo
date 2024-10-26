
const Todo = ({ todo }) => {
  return (
    <div key={todo.id}>
        <input type="checkbox" checked={todo.completed} />
        {todo.content}
    </div>
  )
}

export default Todo;