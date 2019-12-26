import React from "react";
import PropTypes from "prop-types";
import styles from "./MainCalendar.scss";

import Calendar from "tui-calendar"; /* ES6 */
import "tui-calendar/dist/tui-calendar.css";

// If you use the default popups, use this.
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

class MainCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.calendar = null;
  }

  componentDidMount() {
    this.calendar = new Calendar("#calendar", {
      defaultView: "month",
      useCreationPopup: true,
      useDetailPopup: true
    });

    this.calendar.setCalendars([
      {
        id: "Major Subject",
        name: "전공 필수",
        color: "#ffffff",
        bgColor: "#ff5583",
        dragBgColor: "#ff5583",
        borderColor: "#ff5583"
      },
      {
        id: "Elective Subject",
        name: "전공 선택",
        color: "#ffffff",
        bgColor: "#ffbb3b",
        dragBgColor: "#ffbb3b",
        borderColor: "#ffbb3b"
      },
      {
        id: "General Subject",
        name: "일반 교양",
        color: "#ffffff",
        bgColor: "#03bd9e",
        dragBgColor: "#03bd9e",
        borderColor: "#03bd9e"
      }
    ]);

    this.calendar.createSchedules([
      {
        id: "1",
        calendarId: "Major Subject",
        title: "자료구조론",
        category: "time", // 일반 일정
        start: "2019-12-27T10:00:00",
        end: "2019-12-27T11:00:00"
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
      {
        id: "9",
        calendarId: "Homework",
        title: "소프트웨어 개론 레포트 제출",
        category: "task", // 태스크
        start: "2019-12-28T10:30:00",
        end: "2019-12-28T11:30:00",
        color: "#ffffff",
        bgColor: "#9e5fff",
        dragBgColor: "#9e5fff",
        borderColor: "#9e5fff"
      },
      {
        id: "10",
        calendarId: "Test",
        title: "쪽지 시험",
        category: "milestone", // 마일스톤
        start: "2019-12-29T11:30:00",
        end: "2019-12-29T12:00:00",
        color: "#bbdc00",
        bgColor: "#ffffff",
        dragBgColor: "#ffffff",
        borderColor: "#ffffff"
      }
    ]);

    this.calendar.on("beforeCreateSchedule", scheduleData => {
      const schedule = {
        calendarId: scheduleData.calendarId,
        id: String(Math.random() * 100000000000000000),
        title: scheduleData.title,
        isAllDay: scheduleData.isAllDay,
        start: scheduleData.start,
        end: scheduleData.end,
        category: scheduleData.isAllDay ? "allday" : "time",
        location: scheduleData.location // 장소 정보도 입력할 수 있네요!
      };

      this.calendar.createSchedules([schedule]);

      alert("일정 생성 완료");
    });

    this.calendar.on("beforeUpdateSchedule", event => {
      const { schedule, changes } = event;

      this.calendar.updateSchedule(schedule.id, schedule.calendarId, changes);
    });
  }

  render() {
    return (
      <div className={styles.MainCalendar}>
        <div id="calendar" />
      </div>
    );
  }
}

MainCalendar.propTypes = {};
MainCalendar.defaultProps = {};

export default MainCalendar;
