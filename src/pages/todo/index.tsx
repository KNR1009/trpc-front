import { trpc } from "../../utils/trpc";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

export default function Page() {
  const { data } = trpc.todo.getTodos.useQuery();
  const createTodoMutation = trpc.todo.createTodo.useMutation();
  const deleteTodoMutation = trpc.todo.deleteTodo.useMutation();

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

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodoMutation.mutateAsync({ id });
      alert("削除しました");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ul>
        {data.map((todo) => (
          <div key={todo.id}>
            <Link href={`todo/${todo.id}`}>
              <li>{todo.title}</li>
            </Link>
            <button
              onClick={() => {
                handleDeleteTodo(todo.id);
              }}
            >
              削除
            </button>
          </div>
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
