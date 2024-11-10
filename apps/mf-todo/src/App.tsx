import { Button } from "@xionwcfm/xds/button";
import { overlay } from "overlay-kit";
import { useState } from "react";
import { TodoList } from "./components/todo-list";
import { useTodoWriteBottomSheet } from "./components/use-todo-bottom-sheet";
import { useCreateTodo } from "./hooks/use-todo";

function App() {
  const bottomSheet = useTodoWriteBottomSheet();

  const createTodo = useCreateTodo();
  const [title, setTitle] = useState("");
  return (
    <>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() => createTodo(title)}>제출</button>
      <button onClick={() => bottomSheet.open()}>트리거</button>
      <TodoList />
    </>
  );
}

export default App;
