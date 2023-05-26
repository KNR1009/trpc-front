import { trpc } from "../../utils/trpc";
import Link from "next/link";

export default function Page() {
  const { data } = trpc.todo.getTodos.useQuery();
  if (!data) {
    return;
  }
  console.log(data);

  return (
    <div>
      <ul>
        {data.map((todo) => (
          <Link key={todo.id} href={`todo/${todo.id}`}>
            <li>{todo.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
