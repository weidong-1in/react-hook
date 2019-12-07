import HTTP from './http'
function getGood(id) {
  return function (dispacth) {
    return HTTP.post("/lecturer/getgood", {
      article_id: id
    }).then(res => {
      if (res.data.code === 0) {
        dispacth({
          type: "GOOD",
          goodId: res.data.gooid
        })
      }
    })
  }
};
function setGood(id) {
  return function (dispacth) {
    return HTTP.post("/lecturer/good", {
      article_id: id
    }).then(res => {
      if (res.data.code === 0) {
        dispacth(getGood(id))
      }
      return true;
    })
  }
};
function cancelGood({ id, goodId }) {
  return function (dispacth) {
    return HTTP.post("/lecturer/cancelgood", {
      article_id: id,
      goodid: goodId
    }).then(res => {
      if (res.data.code === 0) {
        dispacth({
          type: "CANCEL_GOOD"
        })
        return true;
      }
    })
  }
};

export { getGood, setGood, cancelGood };
