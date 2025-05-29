import type { ITodo } from "../../types/Todo";
import { motion } from "framer-motion";

type TodoItemProps = {
  todo: ITodo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`group flex items-start p-4 rounded-lg transition-all
        ${
          todo.completed
            ? "bg-[#f4c095]/10"
            : "bg-white hover:shadow-md border border-[#f4f0ea]"
        }`}
    >
      <button
        onClick={() => onToggle(todo.id)}
        className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center
          ${
            todo.completed
              ? "bg-[#1d7874] border-[#1d7874]"
              : "border-[#1d7874] group-hover:border-[#f4c095]"
          }`}
      >
        {todo.completed && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </button>

      <div className="ml-3 flex-1 min-w-0">
        <p
          className={`text-sm leading-5 font-medium truncate
          ${
            todo.completed ? "text-[#1d7874]/60 line-through" : "text-[#1d7874]"
          }`}
        >
          {todo.title}
        </p>
        {todo.description && (
          <p className="text-xs text-gray-500 mt-1">{todo.description}</p>
        )}
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className="ml-2 text-[#f4c095] hover:text-[#1d7874] transition-colors"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </motion.div>
  );
};
