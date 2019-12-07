export default function messageList(state = {
  messageData: [],
  messagePage: 1,
  loading: false,
  loadEnd: false
}, action) {
  switch (action.type) {
    case "MESSAGE_LOAD":
      return {
        ...state,
        loading: true
      };
    case "MESSAGE_LOADOVER":
      return {
        ...state,
        loading: false,
        messagePage: ++state.messagePage,
        messageData: state.messageData.concat(action.messageData)
      };
    case "MESSAGE_ADD":
      return {
        ...state,
        messageData: [action.messageData, ...state.messageData]
      };
    case "MESSAGE_LOADEND":
      return {
        ...state,
        loadEnd: true
      };
    case "MESSAGE_RESET":
      return {
        messageData: [],
        messagePage: 1,
        loading: false,
        loadEnd: false
      }
  }
  return state;
} 