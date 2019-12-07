import React, { useRef, useEffect } from 'react';
export default function Join() {
  const list = useRef(null);
  useEffect(() => {
    let lis = list.current.querySelectorAll("li");
    lis.forEach(item => {
      item.addEventListener("touchstart", () => {
        item.classList.add('active');
      });
      item.addEventListener("touchend", () => {
        item.classList.remove('active');
      });
    })
  })
  return (
    <div className="teacher_index">
      <h2>加入我们</h2>
      <ul className="teacher_list clearfix" ref={list}>
        <li>
          <div className="message_li">
            <h3>web前端</h3>
            <p>人数：XX人</p>
            <p>加入</p>
          </div>
        </li>
        <li>
          <div className="message_li">
            <h3>web前端</h3>
            <p>人数：XX人</p>
            <p>加入</p>
          </div>
        </li>
        <li>
          <div className="message_li">
            <h3>web前端</h3>
            <p>人数：XX人</p>
            <p>加入</p>
          </div>
        </li>
        <li>
          <div className="message_li">
            <h3>web前端</h3>
            <p>人数：XX人</p>
            <p>加入</p>
          </div>
        </li>
      </ul>
      <div className="welcome clearfix">
        <div className="welcome_photo">
          <img src={require("../../common/images/xiaole.png")} alt="" />
        </div>
        <p>欢迎大家来，这里文化轻松包容，且呈多元化发展倾向，标准清晰量化……
            <span>一起学习共同成长</span>
        </p>
      </div>
    </div>
  )
}