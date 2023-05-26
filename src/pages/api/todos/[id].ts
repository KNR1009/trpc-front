// import { PrismaClient } from "@prisma/client";
// import type { NextApiRequest, NextApiResponse } from "next";

// const prisma = new PrismaClient();

// export default async function handle(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { id } = req.query;

//   if (req.method === "GET") {
//     const todo = await prisma.todo.findUnique({
//       where: { id: Number(id) },
//     });
//     res.json(todo);
//   } else if (req.method === "PUT") {
//     const { title, body } = req.body;
//     const todo = await prisma.todo.update({
//       where: { id: Number(id) },
//       data: {
//         title,
//         body,
//       },
//     });
//     res.json(todo);
//   } else if (req.method === "DELETE") {
//     const todo = await prisma.todo.delete({
//       where: { id: Number(id) },
//     });
//     res.json(todo);
//   }
// }
