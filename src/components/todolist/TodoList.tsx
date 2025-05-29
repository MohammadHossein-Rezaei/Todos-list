import type { ITodo } from "../../types/Todo";
import { TodoItem } from "../todoItem/TodoItem";

type TodoListProps = {
  todos: ITodo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-gray-500">!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};
