import { trpc } from "../../utils/trpc";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

export default function Page() {
  const { data } = trpc.todo.getTodos.useQuery();
  const createTodoMutation = trpc.todo.createTodo.useMutation();

  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  if (!data) {
    return;
  }

  const handleCreateTodo = async () => {
    try {
      if (title && body) {
        await createTodoMutation.mutateAsync({ title, body });
        setTitle("");
        setBody("");
        alert("新規登録しました");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ul>
        {data.map((todo) => (
          <Link key={todo.id} href={`todo/${todo.id}`}>
            <li>{todo.title}</li>
          </Link>
        ))}
      </ul>
      <div className="create-form">
        <p>新規作成</p>
        <div className="title">
          <label>タイトル</label>
          <input
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </div>
        <div className="body">
          <label>本文</label>
          <input
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setBody(e.target.value);
            }}
            value={body}
          />
        </div>
        <button onClick={handleCreateTodo}>登録</button>
      </div>
    </div>
  );
}
