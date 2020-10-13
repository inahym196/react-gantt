import React, { useRef, useEffect, useState } from 'react';
import Scale from './scale'
import Member from './member'

function Chart() {

    const [cliWidth, setCliWidth] = useState(0);
    const divTask = useRef(null);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(divTask => {
            setCliWidth(divTask[0].contentRect.width);
        });
        resizeObserver.observe(divTask.current);
    });

    const userFormat = {
        id: 0,
        name: "",
        position: ""
    };

    const [users, setUsers] = useState([userFormat]);
    useEffect(() => {
        fetch("http://localhost:3001/users")
            .then(res => res.json())
            .then(json => setUsers(json))
    }, [setUsers]);

    const taskFormat = {
        id: 0,
        operator: "",
        startTime: "",
        endTime: "",
        category: ""
    };

    const [tasks, setTasks] = useState([taskFormat]);
    useEffect(() => {
        const fetchTasks = () => {
            fetch("http://localhost:3001/tasks")
                .then(res => res.json())
                .then(json => { setTasks(json) })
        }
        fetchTasks();
    }, [setTasks]);

    const assignTasks = {};

    tasks.forEach((task, index) => {
        if (assignTasks[task.operator] == null) {
            assignTasks[task.operator] = [];
        }
        assignTasks[task.operator].push(task);
    });

    return (
        <>
            <div id='chart-header'>
                <Today />
                    ＜＞
                </div>
            <div id='chart-area'>
                <ul id='member-area'>
                    {users.map(user => <Member key={user.id} id={'user' + user.id} user={user} />)}
                </ul>
                <div id='base-area' ref={divTask}>
                    <Scale width={cliWidth} />
                    <div id='timeline'></div>
                    <div id='task-area'>
                        <li id='name1-tasks'>
                            <span className='bubble answer task9' style={{ width: '44px', marginLeft: '0px' }}></span>
                            <span className='bubble-span task9' style={{ marginLeft: '0px' }}>最終回答</span>
                            <span className='bubble answer task10' style={{ width: '39px', marginLeft: '56px' }}></span>
                            <span className='bubble-span task10' style={{ marginLeft: '56px' }}>最終回答</span>
                        </li>
                    </div>
                </div>
            </div>
        </>
    );
}
/*
<div id='base-area' >
                    
                    <ul id='data'>
                        <li id='name1-tasks'>
                            <span className='bubble answer task9' style={{ width: '44px', marginLeft: '0px' }}></span>
                            <span className='bubble-span task9' style={{ marginLeft: '0px' }}>最終回答</span>
                            <span className='bubble answer task10' style={{ width: '39px', marginLeft: '56px' }}></span>
                            <span className='bubble-span task10' style={{ marginLeft: '56px' }}>最終回答</span>
                        </li>
                        {users.map(user => { return <UserTasks user={user} task={assignTasks[user.name]} width={cliWidth} /> })}
                    </ul>
                </div>
*/

function Today() {
    const Week = ["日", "月", "火", "水", "木", "金", "土"];
    const date = new Date();
    return (
        <div className='date'>
            {date.getMonth() + 1}/{date.getDate()}({Week[date.getDay()]})
        </div>
    );
}

export default Chart;