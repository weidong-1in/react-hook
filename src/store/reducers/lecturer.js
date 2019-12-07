export default function lecturer(state = {
  data: []
}, action) {
  switch (action.type) {
    case "LOAD_LECTURER":
      return {
        data: action.data
      };
  }
  return state;
};