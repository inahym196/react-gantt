import React, { useState, useEffect } from 'react';
import { calcStyle } from '../function/general.js';

function UserTasks(props) {
    console.log("< UserTasks >");

    const [tasks, setTasks] = useState(null);
    const [taskStyles, setTaskStyles] = useState(null);

    const urlTaskAssignedTo = "http://localhost:3001/tasks?operator=";

    useEffect(() => {
        function fetchTask() {
            fetch(urlTaskAssignedTo + props.username)
                .then(res => res.json())
                .then(json => {
                    setTasks(json);
                })
        }
        fetchTask();

    }, [props.username]);

    useEffect(() => {
        if (tasks) {
            setTaskStyles(Object.assign({}, ...tasks.map(task => {
                let obj = {};
                obj["task" + task.id] = calcStyle(task, props.perWidth, props.time);
                return obj;
            })));
        };
        
    }, [props, tasks])

    if (tasks && taskStyles) {
        return (
            <li key={props.userid} id={`user${props.userid}-tasks`}>
                {tasks.map(task =>
                    <>
                        <span
                            key={task.id}
                            className={`bubble task${task.id} ${task.category}`}
                            style={taskStyles["task" + task.id]}></span>
                        <span key={`bubble${task.id}`} className={`bubble-span task${task.id}`} style={taskStyles["task" + task.id]}>{task.category}</span>
                    </>
                )
                }
            </li>
        )
    } else {
        return null;
    }
}
export default UserTasks;