import HTTP from './http'
export default function getWorks(id) {
  return function (dispacth) {
    return HTTP.post("/lecturer/info", {
      article_id: id
    }).then(res => {
      dispacth({
        type: "WORK_LOADOVER",
        data: res.data
      })
    })
  }
}
