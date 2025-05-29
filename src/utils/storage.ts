import type { ITodo } from "../types/Todo";

export const getTodos = (): ITodo[] => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};
export const saveTodos = (todos: ITodo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
