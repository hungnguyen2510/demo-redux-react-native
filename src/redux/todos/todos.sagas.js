import {
  takeLatest,
  takeEvery,
  call,
  put,
  all,
  select,
} from 'redux-saga/effects';
import {getTodoById, getTodos} from '../../apis/todos.api';
import {
  fetchTodoByIdFailure,
  fetchTodoByIdSuccess,
  fetchTodosFailure,
  fetchTodosSuccess,
} from './todos.actions';
import TodosTypes from './todos.types';

function* fetchTodos() {
  try {
    const todosData = yield call(getTodos);
    yield put(fetchTodosSuccess(todosData));
  } catch (error) {
    yield put(fetchTodosFailure(error));
  }
}

function* fetchTodoById({payload}) {
  try {
    const todoById = yield call(getTodoById, payload);
    yield put(fetchTodoByIdSuccess(todoById));
  } catch (error) {
    yield put(fetchTodoByIdFailure(error));
  }
}

function* onFetchTodos() {
  yield takeLatest(TodosTypes.FETCH_TODOS_START, fetchTodos);
}

function* onFetchTodoById() {
  yield takeLatest(TodosTypes.FETCH_TODO_BY_ID_START, fetchTodoById);
}

export function* todosSagas() {
  yield all([call(onFetchTodos), call(onFetchTodoById)]);
}
