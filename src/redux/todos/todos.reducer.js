import TodosTypes from './todos.types';
const INITIAL_STATE = {
  todos: {
    data: null,
    isLoading: false,
    isLoaded: false,
    isFetched: false,
    error: null,
  },
  currentTodo: {
    data: null,
    isLoading: false,
    isLoaded: false,
    isFetched: false,
    error: null,
  },
};
const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodosTypes.FETCH_TODOS_START:
      return {
        ...state,
        todos: {
          data: null,
          isLoading: true,
          isLoaded: false,
          isFetched: false,
          error: null,
        },
      };
    case TodosTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: {
          data: action.payload,
          isLoading: false,
          isLoaded: true,
          isFetched: true,
          error: null,
        },
      };
    case TodosTypes.FETCH_TODOS_FAILURE:
      return {
        ...state,
        todos: {
          data: null,
          isLoading: false,
          isLoaded: false,
          isFetched: true,
          error: action.payload,
        },
      };
    case TodosTypes.FETCH_TODO_BY_ID_START:
      return {
        ...state,
        currentTodo: {
          data: null,
          isLoading: true,
          isLoaded: false,
          isFetched: false,
          error: null,
        },
      };
    case TodosTypes.FETCH_TODO_BY_ID_SUCCESS:
      return {
        ...state,
        currentTodo: {
          data: action.payload,
          isLoading: false,
          isLoaded: true,
          isFetched: true,
          error: null,
        },
      };
    case TodosTypes.FETCH_TODO_BY_ID_FAILURE:
      return {
        ...state,
        currentTodo: {
          data: null,
          isLoading: false,
          isLoaded: false,
          isFetched: true,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default todosReducer;
