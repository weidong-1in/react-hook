import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import login from '../../store/action/login'
import Tab from '../../common/component/tab';
import '../../common/css/index.css';
import Course from '../../view/index/course';
import Vip from '../../view/index/vip';
import Works from '../../view/index/works';

import Frame from '../../common/component/frame';
import getWorks from '../../store/action/getWorks'

let imgData = [
  require("../../common/images/banner1.jpg"),
  require("../../common/images/banner2.jpg"),
  require("../../common/images/banner3.jpg"),
  require("../../common/images/banner4.jpg")
]
function Index(props) {
  let { dispatch } = props;
  function getWorkData() {
    return dispatch((getWorks()));
  };
  useEffect(() => {
    getWorkData();
  }, [])
  return (
    <Frame
      pullUp={true}
      getData={getWorkData}
    >
      <div >
        <Tab
          data={imgData}
          render={(data) => {
            return <img src={data} />
          }}
        />
        <section className="index_content">
          <Course />
          <Vip />
          <Works {...props} />
        </section>
      </div>
    </Frame>
  );
}

export default connect(props => ({ ...props.works }))(Index);
