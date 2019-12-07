import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Works(props) {
    let { data, loadEnd, loading } = props;
    let wrap = useRef(null);
    function getLoad(loadEnd, loading) {
        if (loadEnd) {
            return "没有更多数据了"
        } else if (loading) {
            return "正在加载"
        } else {
            return "向上滑动加载更多"
        }
    }
    useEffect(() => {
        let imgs = wrap.current.querySelectorAll("img");
        imgs.forEach(img => {
            img.onload = function () {
                window.pageScroll.refresh();
            };
        });
    }, [data])
    return (<div className="works">
        <h3>学员作品</h3>
        <ul className="works_list clearfix" ref={wrap}>
            {
                data.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link to={'/work/' + item.id}>
                                <img src={item.icon} className="work_a" />
                                <span className="wrork_txt clearfix work_a">
                                    <strong className="work_a">{item.title}</strong>
                                    <span className="work_a">
                                        <em className="work_a">{item.message}</em>
                                        <em className="work_a">{item.good}</em>
                                    </span>
                                </span>
                            </Link>
                        </li>
                    )
                })
            }

        </ul>
        <a className="more" >{getLoad(loadEnd, loading)}</a>
    </div>)
};
