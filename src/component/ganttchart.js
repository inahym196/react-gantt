import React, { useRef, useEffect, useState } from 'react';
import UserTasks from './usertasks'
import Scale from './scale'
import TimeLine from './timeline'
import { calcNumOfScale } from '../function/general'
import './gantt.scss';
import { TextField, MenuItem } from '@material-ui/core'

function GanttChart() {

    console.log("< chart >")
    const divTask = useRef(null);
    const [perWidth, setPerWidth] = useState(0);
    const [users, setUsers] = useState(null);
    const [bizHour, setBizHour] = useState({ opening: 930, closing: 1800 });

    const urlAllUser = "http://localhost:3001/users";
    const Week = ["日", "月", "火", "水", "木", "金", "土"];
    const date = new Date();

    const echoMyTaskInfo = () => {

    }

    useEffect(() => {
        let resizeObserver = new ResizeObserver(divTask => {
            let numOfScale = calcNumOfScale(bizHour);
            let cliWidth = divTask[0].contentRect.width
            setPerWidth(cliWidth / (numOfScale + 1) - 0.1);
        });
        resizeObserver.observe(divTask.current);

        function fetchUser() {
            fetch(urlAllUser)
                .then(res => res.json())
                .then(json => setUsers(json))
        }
        fetchUser();
        return (() => resizeObserver.disconnect());

    }, [bizHour]);

    return (
        <div id='gantt-area'>
            <div id='chart-area'>
                <div id='chart-header'>
                    <div className='date'>
                        {date.getMonth() + 1}/{date.getDate()}({Week[date.getDay()]})
                </div>
                    ＜＞
                </div>
                <div id='chart-body'>
                    <ul id='member-area'>
                        {users && users.map(user => <li key={user.id} id={'user' + user.id} >{user.name}</li>)}
                    </ul>
                    <div id='base-area' ref={divTask} >
                        <Scale time={bizHour} perWidth={perWidth} />
                        <TimeLine time={bizHour} perWidth={perWidth} />
                        <ul id='task-area'>
                            {users && users.map(user => <UserTasks perWidth={perWidth} userid={user.id} username={user.name} time={bizHour} />)}
                        </ul>
                    </div>
                </div>
            </div>
            <div id="crud-area">
                <form noValidate autoComplete="off">
                    <TextField label="Name" />
                    <TextField label="StartTime" />
                    <TextField label="EndTime" />
                    <TextField select label="Type" value="hoge">
                        <MenuItem>hoge</MenuItem>
                        <MenuItem>hoge</MenuItem>
                        <MenuItem>hoge</MenuItem>
                    </TextField>
                </form>
            </div>
        </div >
    );
}
export default GanttChart;