'use client'
import { useTransition } from "react";
import { CompleteTodo } from "@/utils/actions";

const Todo = ({ todo }) => {
    const [isPending, startTransition] = useTransition();
  return (
    <div 
        key={todo.id} 
        className={`border border-black/20 cursor-pointer ${todo.isCompleted? 'line-through text-grey' : 'text-black'}`}
        onClick={() => startTransition(() => CompleteTodo(todo.id))}>
        <div>{todo.content}</div>
    </div>
  )
}

export default Todo;