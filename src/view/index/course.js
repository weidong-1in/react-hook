import React from 'react';
export default function Course() {
  return (
    <ul className="content_list clearfix">
      <li className="pop_li">
        <button className="popular">Popular</button>
        <h3 className="list_title">
          WEB前端框架
            <span>React</span>
        </h3>
        <p className="price">JS</p>
        <div className="txt">
          <p>用于构建用户界面的 JavaScript 库：声明式、组件化</p>
          <button className="signUp">添加</button>
        </div>
      </li>
      <li className="month_li">
        <h3 className="list_title">WEB前端开发<br />
          HTML+CSS</h3>
        <p className="price">JS</p>
        <div className="txt">
          <time>XXX</time>
          <p>
            PC端静态页面，移动静
            态页面制作...
            </p>
          <button className="signUp">添加</button>
        </div>
      </li>
      <li className="month_li">
        <h3 className="list_title">WEB前端开发<br />
          JavaScript</h3>
        <p className="price">JS</p>
        <div className="txt">
          <time>XXX</time>
          <p>
            作用域、闭包、原型链、核
            心算法...
            </p>
          <button className="signUp">添加</button>
        </div>
      </li>
      <li className="pop_li">
        <button className="popular">Popular</button>
        <h3 className="list_title">
          WEB前端框架
            <span>Vue</span>
        </h3>
        <p className="price">JS</p>
        <div className="txt">
          <p>渐进式JavaScript 框架:易用、灵活、高效</p>
          <button className="signUp">添加</button>
        </div>
      </li>
    </ul>
  )
};