import HTTP from './http'
export default function isLogin(data) {
  return function (dispacth) {
    return HTTP.post('/user/islogin').then(res => {
      if (res.data.code === 0) {
        dispacth({
          type: "LOGIN",
          user: res.data.username
        })
      }
    })
  }
}