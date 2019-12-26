import React from "react";
import PropTypes from "prop-types";
import styles from "./MainCalendar.scss";

import Calendar from "tui-calendar"; /* ES6 */
import "tui-calendar/dist/tui-calendar.css";

import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

class MainCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.calendar = null;

    this.resetSchedules = this.resetSchedules.bind(this)
  }

  componentDidMount() {
    this.calendar = new Calendar(`#${this.props.id}`, {
      defaultView: "month",
      taskView: false,
      useCreationPopup: true,
      useDetailPopup: true,
      usageStatistics: false,
      isReadOnly: this.props.isReadOnly
    });

    this.calendar.setCalendars(this.props.calendars);
    this.calendar.createSchedules(this.props.schedules);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.schedules !== this.props.schedules) {
      this.resetSchedules();
    }
  }

  resetSchedules() {
    this.calendar.clear();
    this.calendar.createSchedules(this.props.schedules, true);
    this.calendar.render();
  }
  
  render() {
    return (
      <div className={styles.MainCalendar}>
        <div id={this.props.id} />
      </div>
    );
  }
}

MainCalendar.propTypes = {
  id: PropTypes.string,
  isReadOnly: PropTypes.bool,
  calendars: PropTypes.array,
  schedule: PropTypes.array,
};
MainCalendar.defaultProps = {
  id: "calendar",
  isReadOnly: false,
  calendars: [
    {
      id: "AcademicSchedule",
      name: "학사 일정",
      color: "#ffffff",
      bgColor: "#ff5583",
      dragBgColor: "#ff5583",
      borderColor: "#ff5583"
    },
    {
      id: "GeneralStudentCouncil",
      name: "총학생회",
      color: "#ffffff",
      bgColor: "#ffbb3b",
      dragBgColor: "#ffbb3b",
      borderColor: "#ffbb3b"
    },
    {
      id: "EngineeringCollege",
      name: "공과대학",
      color: "#ffffff",
      bgColor: "#03bd9e",
      dragBgColor: "#03bd9e",
      borderColor: "#03bd9e"
    }
  ],
  schedules: [
    {
      id: "1",
      calendarId: "Major Subject",
      title: "자료구조론",
      category: "time", // 일반 일정
      start: "2019-12-27T10:00:00",
      end: "2019-12-27T11:00:00",
      body: "설명",
      location: "이건 위치",
      isReadOnly: true
    },
    {
      id: "2",
      calendarId: "Elective Subject",
      title: "웹 프로그래밍",
      category: "time",
      start: "2019-12-27T14:00:00",
      end: "2019-12-27T15:00:00"
    },
    {
      id: "3",
      calendarId: "Elective Subject",
      title: "인공지능",
      category: "time",
      start: "2019-12-25T09:00:00",
      end: "2019-12-25T10:00:00"
    },
    {
      id: "4",
      calendarId: "Major Subject",
      title: "소프트웨어 공학",
      category: "time",
      dueDateClass: "",
      start: "2019-12-26T09:00:00",
      end: "2019-12-26T10:30:00"
    },
    {
      id: "5",
      calendarId: "Elective Subject",
      title: "데이터베이스",
      category: "time",
      start: "2019-12-26T10:30:00",
      end: "2019-12-26T12:00:00"
    },
    {
      id: "6",
      calendarId: "Major Subject",
      title: "알고리즘",
      category: "time",
      dueDateClass: "",
      start: "2019-12-28T13:00:00",
      end: "2019-12-28T14:30:00"
    },
    {
      id: "8",
      calendarId: "Travel",
      title: "강촌 OT",
      category: "allday", // 종일 일정
      start: "2019-12-29",
      end: "2019-12-30",
      color: "#ffffff",
      bgColor: "#ff4040", // 일정 색상을 직접 지정할 수 있어요
      dragBgColor: "#ff4040",
      borderColor: "#ff4040"
    },
  ]
};

export default MainCalendar;
