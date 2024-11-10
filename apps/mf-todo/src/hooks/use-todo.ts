import { atom, useAtomValue, useSetAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useCallback } from "react";

export type TodoItem = {
  id: string;
  title: string;
  createdAt: string;
  isDone: boolean;
  deadline: string | null;
};

// const todoAtom = atomWithStorage<TodoItem[]>("@amatada-mf-todo-todolist", [
//   { id: "hemlksfd", deadline: null, isDone: false, title: "밥 먹기", createdAt: new Date().toISOString() },
//   { id: "hemlkdsasfd", deadline: null, isDone: false, title: "밥 먹기", createdAt: new Date().toISOString() },
// ]);

const todoAtom = atom<TodoItem[]>([]);

export const useTodo = () => {
  return useAtomValue(todoAtom);
};

export const useCreateTodo = () => {
  const setter = useSetAtom(todoAtom);
  const addTodo = useCallback(
    (title: string, option?: Partial<Pick<TodoItem, "deadline">>) => {
      setter((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          title,
          createdAt: new Date().toISOString(),
          isDone: false,
          deadline: null,
          ...option,
        },
      ]);
    },
    [setter],
  );
  return addTodo;
};

export const useToggleTodo = () => {
  const setter = useSetAtom(todoAtom);
  const toggleTodo = useCallback(
    (id: string) => {
      setter((prev) => prev.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
    },
    [setter],
  );
  return toggleTodo;
};

export const useDeleteTodo = () => {
  const setter = useSetAtom(todoAtom);
  const deleteTodo = useCallback(
    (id: string) => {
      setter((prev) => prev.filter((todo) => todo.id !== id));
    },
    [setter],
  );
  return deleteTodo;
};
