export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload
});

export const toggleTodo = (payload) => ({
  type: TOGGLE_TODO,
  payload
});

export const removeTodo = (payload) => ({
  type: REMOVE_TODO,
  payload
});

