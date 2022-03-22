import TodosTypes from './todos.types';

export const fetchTodosStart = params => ({
  type: TodosTypes.FETCH_TODOS_START,
  payload: params,
});

export const fetchTodosSuccess = data => ({
  type: TodosTypes.FETCH_TODOS_SUCCESS,
  payload: data,
});

export const fetchTodosFailure = error => ({
  type: TodosTypes.FETCH_TODOS_FAILURE,
  payload: error,
});

export const fetchTodoByIdStart = params => ({
  type: TodosTypes.FETCH_TODO_BY_ID_START,
  payload: params,
});

export const fetchTodoByIdSuccess = data => ({
  type: TodosTypes.FETCH_TODO_BY_ID_SUCCESS,
  payload: data,
});

export const fetchTodoByIdFailure = error => ({
  type: TodosTypes.FETCH_TODO_BY_ID_FAILURE,
  payload: error,
});
