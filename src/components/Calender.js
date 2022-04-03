import React, {useState, useEffect} from 'react';
import {styled} from '@mui/material/styles'
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
  WeekView,
  DayView,
  Toolbar,
  ViewSwitcher,
  DateNavigator,
  TodayButton,
  AppointmentTooltip,
  AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui';


export default function Calender () {

    const [meetings, setMeetings] = useState([]);

    useEffect(() => fetchData(), []);

   const  fetchData = () => {
       fetch('https://customerrest.herokuapp.com/api/trainings')
       .then(response => response.json())
       .then(data => setMeetings(data.content))
       .catch(err => console.error(err))
    }
    // en saa dataa oikeaan muotoon, jotta kalenteri tunnistaisi ne. Jätän tämän koodinpätkän kuitenkin tähän,
    // jotta tästä näkee että olen painiskellut asian kanssa.

    // const meets = () => { 
    //   meetings.map((meeting, index) => [
    //    {
    //        startDate: meeting.date, 
    //        title: meeting.activity,
    //       id: index,
    //    }])
    //  }

    const trains = [
        {startDate: '2022-04-04T10:30',
        endDate: '2022-04-04T11:00',
        title: 'Marika Stenberg'},
    ];

    const current = new Date()
    const today = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
    <Paper>
        <Scheduler
        data={trains}
        >
        <ViewState
         defaultCurrentDate={today}
         defaultCurrentViewName="Month"/>
         <DayView
            startDayHour={6}
            endDayHour={23}
          />
          <WeekView
            startDayHour={6}
            endDayHour={23}
          />
        <MonthView />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <ViewSwitcher />
        <Appointments />¨
        <AppointmentTooltip 
            showCloseButton
        />
        </Scheduler>
    </Paper>
    )
}
