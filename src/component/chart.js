import React, { useRef, useEffect, useState } from 'react';
import UserTasks from './usertasks'
import Scale from './scale'
import { setTimeScale } from '../function/general'

function Chart() {

    console.log("< chart >")
    const divTask = useRef(null);
    const [cliWidth, setCliWidth] = useState(0);
    const [users, setUsers] = useState(null);
    const [bizHour, setBizHour] = useState({ opening: 930, closing: 1800 });

    const urlAllUser = "http://localhost:3001/users";
    const Week = ["日", "月", "火", "水", "木", "金", "土"];
    const date = new Date();

    function fetchUser() {
        fetch(urlAllUser)
            .then(res => res.json())
            .then(json => setUsers(json))
    }

    useEffect(() => {
        let resizeObserver = new ResizeObserver(divTask => {
            setCliWidth(divTask[0].contentRect.width);
        });
        resizeObserver.observe(divTask.current);
        fetchUser();
    },[]);

    return (
        <>
            <div id='chart-header'>
                <div className='date'>
                    {date.getMonth() + 1}/{date.getDate()}({Week[date.getDay()]})
                </div>
                    ＜＞
                </div>
            <div id='chart-area'>
                <ul id='member-area'>
                    {users && users.map(user => <li key={user.id} id={'user' + user.id} >{user.name}</li>)}
                </ul>
                <div id='base-area' ref={divTask} >
                    <Scale time={bizHour} width={cliWidth} />
                    <div id='timeline'></div>
                    <ul id='task-area'>
                        {users && users.map(user => <UserTasks width={cliWidth} userid={user.id} username={user.name} time={bizHour} />)}
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Chart;