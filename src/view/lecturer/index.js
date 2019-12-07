import React, { useState, useEffect } from 'react';
import Frame from '../../common/component/frame';
import { connect } from 'react-redux';
import Footer from '../../common/component/footer';
import '../../common/css/teacher.css';
import getLecturers from '../../store/action/getLecturers'
import LecturerTab from './tab';
import Join from './join';
import LecturerAlert from './lecturerAlert';

function Lecturer(props) {

  let { data, dispatch } = props;
  const [show, setShow] = useState(false);
  const [alertData, setAlertData] = useState(null);
  let newData = [];
  for (let i = 0; i < data.length; i += 3) {
    let newArr = []
    data[i] && newArr.push(data[i]);
    data[i + 1] && newArr.push(data[i + 1]);
    data[i + 2] && newArr.push(data[i + 2]);
    newData.push(newArr);
  }
  useEffect(() => {
    dispatch(getLecturers());
  }, []);

  function showAlert(data) {
    setAlertData(data);
    setShow(true);
  }
  function hideAlert() {
    setShow(false);
  }
  return (<div>
    <Frame>
      <div className="teacher_banner">
        <h2><span>讲师团队</span></h2>
        <LecturerTab
          data={data}
          newData={newData}
          showAlert={showAlert}
        />
      </div>
      <Join />
      <Footer />
    </Frame>
    {show ? <LecturerAlert
      data={alertData}
      hideAlert={hideAlert}
    /> : ""}
  </div>);
}

export default connect(state => state.lecturer)(Lecturer);
