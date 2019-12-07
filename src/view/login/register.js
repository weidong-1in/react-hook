import React, { useState } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import register from '../../store/action/register'
import { useBack } from '../../common/hook/index'

function RegisterBox(props) {
  const { setDeg } = props;
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [vcode, setVcode] = useState("");
  const [vcodeShow, setVcodeShow] = useState(false);
  const [vcodeSrc, setVcodeSrc] = useState("/miaov/user/verify?" + Date.now());
  let point = {};
  const back = useBack(props.history);//hook只能在组件外层使用
  function toRegister() {
    props.dispatch(register({
      verify: vcode,
      username: user,
      password: password,
      repassword: password2
    })).then(data => {
      alert(data.msg);
      setTimeout(() => {
        if (data.code === 0) {
          setDeg(0);
        }
        setVcodeSrc("/miaov/user/verify?" + Date.now())
      }, 200)
    })
  }
  return (
    <div className="register_box">
      <h3>注册账号</h3>
      <div className="register_form">
        <p>
          <input
            type="text"
            placeholder="用户名"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="设置密码"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="确定密码"
            value={password2}
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
          />
        </p>
        <p className="clearfix">
          <input
            type="text"
            placeholder="验证码"
            value={vcode}
            onChange={(e) => {
              setVcode(e.target.value)
            }}
            onFocus={() => {
              setVcodeShow(true);
            }}
            className="verifyCode"
          />
          {vcodeShow ? <img
            className="verify"
            src={vcodeSrc}
            onTouchStart={(e) => {
              let touch = e.changedTouches[0];
              point.x = touch.pageX;
              point.y = touch.pageY;
            }}
            onTouchEnd={(e) => {
              let touch = e.changedTouches[0];
              let nowPoint = {
                x: touch.pageX,
                y: touch.pageY
              };
              if (Math.abs(nowPoint.x - point.x) < 5 && Math.abs(nowPoint.y - point.y) < 5) {
                setVcodeSrc("/miaov/user/verify?" + Date.now());
                //一定要加时间戳，防止缓存
              }
            }}
          /> : ""}
        </p>
        <button className="form_btn"
          onClick={() => {
            toRegister();
          }}>马上注册</button>
        <p className="form_tip">已有帐号？<a onClick={() => { setDeg(0) }}>立即登录</a></p>
      </div>
    </div>
  )
}

export default connect(res => res)(withRouter(RegisterBox));