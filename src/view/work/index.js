import React, { useEffect, useState } from 'react';
import Frame from '../../common/component/frame';
import '../../common/css/miiaov.css';
import { connect } from 'react-redux';
import getWork from '../../store/action/getWork';
import getMessageList from '../../store/action/getMessageList';
import Skeleton from '../../common/component/skeleton';
import Main from './main';
import Message from './message'

// import Article  from './article';

function Work(props) {
  let { dispatch, data, loading, match, user, history } = props;
  let { id } = match.params;
  let [showMessage, setShowMessage] = useState(false)

  function setShow() {
    setShowMessage(false);
  }
  function getMessage() {
    return dispatch(getMessageList(id));
  }
  useEffect(() => {
    dispatch(getWork(id));
    getMessage();
    return () => {
      dispatch({
        type: "WORK_RESET"
      });
      dispatch({
        type: "MESSAGE_RESET"
      })
    }
  }, []);
  return (
    <div >
      <Frame
        pullUp={true}
        getData={getMessage}
      >

        {
          loading ? <Skeleton /> : <Main data={data} />
        }
      </Frame>
      <footer
        className="miiapv_footer"
        onClick={() => {
          if (user) {
            setShowMessage(true);
          } else {
            history.push("/login")
          }
        }}
      >回复本贴</footer>
      <Message
        show={showMessage}
        setShow={setShow}
        id={id}
      />
    </div>
  );
}

export default connect(state =>
  ({
    ...state.work,
    user: state.getUser
  }))(Work);
