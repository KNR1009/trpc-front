/* tRPCエンドポイントを作成する (Create a tRPC router) */
import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const router = t.router;
export const procedure = t.procedure;
