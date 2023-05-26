import { trpc } from "../../utils/trpc";

import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { data } = trpc.todo.getTodoById.useQuery({
    id: Number(router.query.id),
  });
  if (!data) {
    return;
  }

  return (
    <div>
      <p>タイトル: {data.title}</p>
      <p>本文: {data.body}</p>
    </div>
  );
}
