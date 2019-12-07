import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { useBack } from '../hook/index';
import isLogin from '../../store/action/isLogin';
import Logout from '../../store/action/logout';

function Header(props) {
  const back = useBack(props.history);
  const path = props.location.pathname;
  const { user, changeShow } = props;
  const [isBtnShow, setBtnShow] = useState(false);

  useEffect(() => {
    props.dispatch(isLogin())
  }, []);
  function getUser() {
    if (path === '/login') {
      return ''
    }
    if (user) {
      return (<span className="header-btn-right">
        <span
          className="header-user"
          onClick={() => {
            setBtnShow(!isBtnShow);
          }}
        >{user}</span>
        <span
          className="header-logout-btn"
          onClick={() => { props.dispatch(Logout()) }}
          style={{ display: isBtnShow ? "block" : "none" }}
        >退出</span>
      </span>)
    }
    return <Link className="user" to='/login' />
  }
  return (
    <div>
      <header id="header">
        <nav className="menu">
          {path === '/login' ? <a
            className="header-btn-left iconfont icon-back"
            onClick={() => { back(); }}
          ></a> : <a
            className="header-btn-left iconfont icon-hycaidan"
            onClick={() => {
              changeShow();
            }}
          ></a>}
        </nav>
        <h1 className="logo">miaov.com</h1>
        {getUser()}
      </header>
    </div>
  )
}
export default connect(state => {
  return { user: state.getUser }
})(withRouter(Header));