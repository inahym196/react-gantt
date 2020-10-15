import React, { useState, useEffect } from 'react';
import { calcStyle } from '../function/general.js';
import {setTimeScale} from '../function/general';

function UserTasks(props) {
    console.log("< UserTasks >");

    const [tasks, setTasks] = useState(null);
    const [taskStyles, setTaskStyles] = useState(null);
    const timeScale = setTimeScale(props.time, props.width);
    const perWidth = props.width / (timeScale.length) - 0.1;

    const urlTaskAssignedTo = "http://localhost:3001/tasks?operator=";

    function getBubbleStyle({marginLeft,width}){
        return `{marginLeft:${marginLeft},width:${width}}`;
    }

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
                obj["task" + task.id] = calcStyle(task, perWidth, props.time);
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

/*
const style = {
        marginLeft: perWidth * widthAboutScale + widthModule * widthAboutMin,
        width: perWidth * durationAboutScale + durationModule * widthAboutMin,
    };
*/


/*
<span class="bubble ${cat} task${i}" style="margin-left: ${style.margin}px;
width: ${style.width}px;" onclick="showTask(${i})"></span>
<span class= "bubble-span task${i}" style = "margin-left: ${style.margin}px;">${categoryAlias[cat]}</span>
*/