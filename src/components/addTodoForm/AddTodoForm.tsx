import { useState } from "react";
import type { ITodo } from "../../types/Todo";
import { motion } from "framer-motion";
type AddTodoFormProps = {
  onAdd: (todo: ITodo) => void;
};

export const AddTodoForm = ({ onAdd }: AddTodoFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTodo: ITodo = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
    };
    onAdd(newTodo);
    setTitle("");
    setDescription("");
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          className="w-full px-4 py-2 border-b-2 border-[#1d7874]/30 focus:border-[#f4c095] outline-none bg-transparent transition-colors"
        />
      </div>

      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description (optional)"
          className="w-full px-4 py-2 border-b-2 border-[#1d7874]/30 focus:border-[#f4c095] outline-none bg-transparent transition-colors min-h-[60px]"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full py-2 bg-gradient-to-r from-[#1d7874] to-[#1d7874]/90 text-white rounded-lg font-medium shadow-md"
      >
        Add Task
      </motion.button>
    </form>
  );
};
