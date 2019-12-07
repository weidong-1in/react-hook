import HTTP from './http'
export default function Logout(data) {
  return function (dispacth) {
    return HTTP.post('/user/logout').then(res => {
      if (res.data.code === 0) {
        dispacth({
          type: "LOGOUT"
        })
      }
    })
  }
}