import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

import { procedure, router } from "../../trpc";
const prisma = new PrismaClient();

export const todoRouter = router({
  getTodos: procedure.query(async () => {
    const todos = await prisma.todo.findMany();
    return todos;
  }),
});
