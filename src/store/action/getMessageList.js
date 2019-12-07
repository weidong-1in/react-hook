import HTTP from './http'
export default function getMessageList(id) {
  return function (dispacth, getState) {
    dispacth({
      type: "MESSAGE_LOAD"
    })
    let { messagePage } = getState().messageList;
    return HTTP.post(`/lecturer/getcomment?page=${messagePage}&rows=10`, {
      article_id: id
    }).then(res => {
      if (!res.data.length) {
        dispacth({
          type: "MESSAGE_LOADEND"
        });
        return false;
      }
      dispacth({
        type: "MESSAGE_LOADOVER",
        messageData: res.data
      });
      return true;
    })
  }
}