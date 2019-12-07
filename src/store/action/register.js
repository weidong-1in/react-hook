import HTTP from './http'
export default function register(data) {
  return function (dispacth) {
    return HTTP.post('/user/register', data).then(res => {
      return res.data;
    })
  }
}