import getUser from './login';
import works from './works';
import lecturer from './lecturer';
import work from './work';
import good from './good';
import messageList from './messagelist';
function index(state = {}, action) {
  return state
};
export default {
  index,
  getUser,
  works,
  lecturer,
  work,
  good,
  messageList
}