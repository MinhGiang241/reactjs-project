import useLocalStorageState from "./useLocalStorageState";

export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
  return {
    todos,
    addTodo: (newTodo) => {
      setTodos([
        ...todos,
        { id: todos.length + 1, task: newTodo, completed: false },
      ]);
    },
    removeTodo: (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    toggleTodo: (id) => {
      const updateTodo = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updateTodo);
    },
    updateTodo: (id, newTodo) => {
      const update = todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTodo } : todo
      );
      setTodos(update);
    },
  };
};
