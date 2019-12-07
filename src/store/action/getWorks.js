import HTTP from './http'
export default function getWorks() {
  return function (dispacth, getState) {
    dispacth({
      type: "LOAD"
    })
    let { page } = getState().works;
    return HTTP.post(`/lecturer/lists?page=${page}&rows=4`, {
      order: "desc",
      sort: "sort",
      category_id: 1,
      recommend: 1
    }).then(res => {
      if (!res.data.length) {
        dispacth({
          type: "LOADEND"
        });
        return false;
      }
      dispacth({
        type: "LOADOVER",
        data: res.data
      });
      return true;
    })
  }
}