import { newTodo } from '@/utils/actions'
const NewTodoForm = ({}) => {
    return (
        <div>
            <form action={newTodo}>
                <input type="text" name="content" className="border border-black/25 rounded"/>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Add Todo</button>
            </form>
        </div>
    )


}

export default NewTodoForm;