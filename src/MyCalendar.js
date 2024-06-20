import React, { Component, Fragment, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable, DropArg } from "@fullcalendar/interaction";
import './MyCalendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from "react-calendar";
import { useNavigate } from "react-router-dom";

const MyCalendar = () => {
  const navigate = useNavigate();
  const navigatedate = () => {
    navigate("/Userdate");
  };
        return (
          <>
          <head>
            </head>
          <body>
            <div className="calendar">
              <FullCalendar
                headerToolbar = {{
                  left: "prev",
                  center: "title",
                  right:"next"
                }}
              height={ 900 }
              defaultView="dayGridMonth"
              plugins={[ dayGridPlugin, interactionPlugin ]}
              locale={"ko"}
              events={[
                {
                  title: '이벤트제목',
                  start: '2024-01-01',
                  end: '2024-01-02'
                }
              ]} // 캘린더에 표시할 이벤트 데이터를 정의합니다.
              editable={true} // 이벤트의 드래그 앤 드롭, 리사이징, 이동을 허용합니다.
              droppable={true} // 캘린더에 요소를 드롭하여 이벤트를 생성할 수 있도록 허용합니다.
              selectable={true} // 사용자가 일정 범위를 선택하여 이벤트를 추가할 수 있도록 허용합니다.
              selectMirror={true} // 이벤트를 추가할 때 선택한 영역을 표시합니다.
              nowIndicator={true} // 현재 시간을 표시하는 인디케이터를 활성화합니다.
              select={function(start, end){
                onclick={navigatedate};
              }}
              // dateClick={handleDateClick} // 날짜를 클릭했을 때 실행할 콜백 함수를 정의합니다.
              // eventClick={handleEventClick} // 이벤트를 클릭했을 때 실행할 콜백 함수를 정의합니다.
              />
            </div>
            </body>
            </>
        );
}

export default MyCalendar;