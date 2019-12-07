import React from 'react';
export default function Vip() {
    return (<div>
        <article className="register_vip">
            <h3>注册成为VIP会员</h3>
            <div className="register_txt">
                <p>即刻观看历年来超值的课程内容。</p>
                <p>感受正统的前端开发课程体系、体验超值的海量实战案例，凝聚讲师知识精华</p>
            </div>
            <strong>XXXXX</strong>
            <button >立即体验</button>
        </article>
        <div className="characteristic">
            <h3>特色</h3>
            <ul className="characteristic_list">
                <li className="clearfix">成为VIP会员后，即刻观看“VIP视频库”中任何视频</li>
                <li className="clearfix">官方会不定期安排公开课，VIP会员可以零距离与讲师接触、探讨各种技术问题</li>
                <li className="clearfix">“作品展示、工作推荐、举办个人技术活动、招聘”等…</li>
            </ul>
        </div>
    </div>)
};