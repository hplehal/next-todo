'use server'
import { revalidatePath } from 'next/cache'
// SERVER ACTIONS - good for sideeffects
import db from './db'

export const CompleteTodo = async(id) => {
    await db.todo.update({
        where: { id },
        data: { isCompleted: true },
    })
    
    revalidatePath('/todos')
}

export const newTodo = async(formData) => {
    const todo = await db.todo.create({
        data: { 
            content: formData.get('content'),
         },
    })

    revalidatePath('/todos')
}