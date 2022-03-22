import Axios from './custom-axios';

export function getTodos() {
  return Axios({
    method: 'GET',
    url: `/todos`,
  }).then(res => {
    return res.data;
  });
}

export function getTodoById({id}) {
  return Axios({
    method: 'GET',
    url: `/todos/${id}`,
  }).then(res => {
    return res.data;
  });
}
