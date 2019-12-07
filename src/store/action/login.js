import HTTP from './http'
export default function login(data) {
  return function (dispacth) {
    return HTTP.post('/user/login', data).then(res => {
      if (res.data.code === 0) {
        dispacth({
          type: "LOGIN",
          user: data.username
        })
      }
      return res.data;
    })
  }
}