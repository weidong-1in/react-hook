import HTTP from './http'
export default function putMessage(info) {
  return function (dispacth) {
    return HTTP.post('/lecturer/addcomment', info).then(res => {
      if (res.data.code !== 0) {
        alert(res.data.msg);
      }
      return true;
    })
  }
}