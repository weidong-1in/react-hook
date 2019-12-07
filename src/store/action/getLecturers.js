import HTTP from './http'
export default function getLecturers() {
  return function (dispacth) {
    return HTTP.post(`/lecturer/lists?page=1&rows=100`, {
      order: "desc",
      sort: "sort",
      category_id: 2,
      recommend: 0
    }).then(res => {
      dispacth({
        type: "LOAD_LECTURER",
        data: res.data
      })
    })
  }
}