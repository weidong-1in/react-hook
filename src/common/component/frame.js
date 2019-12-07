import React, { useState, useEffect, useRef } from 'react';
import BScroll from 'better-scroll';
import { useInnerHeight } from '../hook/index';
import Header from './header';
import Menu from './menu';
import '../css/reset.css';
import '../css/common.css';

export default function Frame(props) {

  let [showMenu, setShowMenu] = useState(false);
  const innerH = useInnerHeight();
  const wrap = useRef(null);
  let { pullUp, getData, page } = props;
  function changeShow() {
    setShowMenu(!showMenu);
  };
  function menuHide() {
    setShowMenu(false);
  };
  useEffect(() => {
    window.pageScroll = new BScroll(wrap.current, {
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|A)$/,
        className: /(^|\s)work_a(\s|$)/
      },
      pullUpLoad: pullUp ? { threshold: 150 } : false//true or {} 允许上滑
    });
    window.pageScroll.on("pullingUp", () => {
      getData().then(res => {
        if (res) {
          window.pageScroll.finishPullUp();
          window.pageScroll.refresh();//立刻刷新
        } else {
          window.pageScroll.closePullUp();//取消上滑
        }
      });
    })
    return () => {
      window.pageScroll = null;
    }
  }, []);
  return (
    <div>
      <Header changeShow={changeShow} />
      <Menu menuHide={menuHide} />
      <div
        id="main"
        style={{
          transform: `translateX(${showMenu ? 4.5 : 0}rem)`,
          height: innerH
        }}
        onTouchStart={() => { menuHide(); }}
      >
        <div
          className="pageWrap"
          ref={wrap}
        >
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  )
}