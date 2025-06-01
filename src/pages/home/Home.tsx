import { useState, useEffect } from "react";
import type { FilterType, ITodo } from "../../types/Todo";
import { getTodos, saveTodos } from "../../utils/storage";
import { AddTodoForm } from "../../components/addTodoForm/AddTodoForm";
import { TodoList } from "../../components/todolist/TodoList";
import { motion } from "framer-motion";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { FilterButtons } from "../../components/filterButton/FilterButtons";
const Home = () => {
  const [todos, setTodos] = useState<ITodo[]>(getTodos());
  const [filteredTodos, setFiltered] = useState<ITodo[]>(getTodos());
  const [currentFilter, setCurrentFilter] = useState<FilterType>("all");
  const getFilteredTodos = () => {
    switch (currentFilter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "active":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };
  useEffect(() => {
    saveTodos(todos);
    setFiltered(todos);
  }, [todos]);
  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFiltered(todos);
      return;
    }

    const filtered = todos.filter(
      (todo) =>
        todo.title.toLowerCase().includes(query.toLowerCase()) ||
        (todo.description &&
          todo.description.toLowerCase().includes(query.toLowerCase()))
    );
    setFiltered(filtered);
  };

  const addTodo = (newTodo: ITodo) => {
    setTodos([...todos, newTodo]);
    setFiltered(todos);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#1d7874]">
            <h2 className="text-xl font-semibold text-[#1d7874] mb-4">
              New Task
            </h2>
            <AddTodoForm onAdd={addTodo} />
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#1d7874]">
                Your Tasks
              </h2>
              <div className="text-sm text-[#f4c095]">
                {filteredTodos.filter((t) => !t.completed).length} pending
              </div>
            </div>

            <SearchBar onSearch={handleSearch} />
            <FilterButtons onChange={setCurrentFilter} />
            <div className="space-y-3">
              {filteredTodos.length === 0 ? (
                <div className="text-center py-10 text-gray-400">
                  {todos.length === 0
                    ? "No tasks yet. Add one!"
                    : "No matching tasks found"}
                </div>
              ) : (
                <TodoList
                  todos={getFilteredTodos()}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Home;
