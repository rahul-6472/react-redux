import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./Action";

export const reducer = (store, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...store,
        todos: [...store.todos, action.payload],
      };

    case TOGGLE_TODO:
      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, status: !todo.status } : todo
        ),
      };

    case REMOVE_TODO:
      return {
        ...store,
        todos: store.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return store;
  }
};
