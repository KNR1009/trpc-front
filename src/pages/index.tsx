import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const { data } = trpc.todo.getTodos.useQuery();
  if (!data) {
    return;
  }
  console.log(data);

  return <div>aaa</div>;
}
