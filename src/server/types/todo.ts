import { z } from "zod";

// 新規作成用
export const createInput = z
  .string()
  .min(1, "todo must be at least 1 letter")
  .max(50, "todo must be 50 letters or less");

// 更新用
export const updateInput = z.object({
  id: z.string(),
  title: z
    .string()
    .min(1, "todo must be at least 1 letter")
    .max(50, "todo must be 50 letters or less"),
  body: z
    .string()
    .min(1, "todo must be at least 1 letter")
    .max(50, "todo must be 50 letters or less"),
});