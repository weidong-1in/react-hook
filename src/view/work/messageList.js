import React from 'react';
import { connect } from 'react-redux';
import ToDate from '../../common/component/toDate';
function MessageListView(props) {
  let { messageData, loading, loadEnd } = props;

  function getLoad() {
    if (loadEnd) {
      return "没有更多数据了"
    } else if (loading) {
      return "正在加载"
    } else {
      return "向上滑动加载更多"
    }
  }
  return (<div>
    <ul className="comment_list">
      {
        messageData.map((item, index) => {
          return (
            <li key={index}>
              <div className="user_comment clearfix">
                <span>{item.username}</span>
              </div>
              <div className="comment_txt">{item.content}</div>
              <div className="comment_footer">
                <time>
                  <ToDate time={item.create_time} />
                </time>
              </div>
            </li>
          )
        })
      }
    </ul>
    <a className="comment_list_more" >{getLoad()}</a>
  </div>)
}
function MessageList(props) {
  let { messageData } = props;
  return (
    <div>
      {messageData.length <= 0 ? <p className="comment_list_info">快来发布第一天评论</p> : <MessageListView {...props} />}
    </div>
  );
}

export default connect(state => state.messageList)(MessageList);
