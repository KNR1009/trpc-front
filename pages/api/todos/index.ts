import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const todos = await prisma.todo.findMany();
    res.json(todos);
  } else if (req.method === "POST") {
    const { title, body } = req.body;
    const todo = await prisma.todo.create({
      data: {
        title,
        body,
      },
    });
    res.json(todo);
  }
}
