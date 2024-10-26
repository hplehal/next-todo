import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async () => {
    const todos = await prisma.todo.findMany()
    return NextResponse.json(todos)
}

export const POST = async (req: Request, ) => {
    const data = await req.json()
    return NextResponse.json(data)
}