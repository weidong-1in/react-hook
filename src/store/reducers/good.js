export default function good(state = {
  good: false,
  goodId: 0
}, action) {
  switch (action.type) {
    case "GOOD":
      return {
        good: true,
        goodId: action.goodId
      };
    case "CANCEL_GOOD":
      return {
        good: false,
        goodId: 0
      };
    case "RESET_GOOD":
      return false;
  }
  return state;
};