import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import { procedure, router } from "../../trpc";
const prisma = new PrismaClient();

export const todoRouter = router({
  getTodos: procedure.query(async () => {
    const todos = await prisma.todo.findMany();
    return todos;
  }),
  getTodoById: procedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ input }) => {
      const todo = await prisma.todo.findUnique({
        where: { id: input.id },
      });
      if (!todo) {
        throw new Error("Todo not found");
      }
      return todo;
    }),
});
