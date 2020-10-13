import React, { useState } from 'react';

function Member(props) {

    const [user, setUser] = useState(props.user);
    //const [mytask, setTask] = useState([props.task]);
    
    return (
        <li>
            <span>{user.name}</span>
            <li key={user.id} id={`${user.id}-tasks`}></li>
        </li>
    );
}
export default Member;

/*
<span class="bubble ${cat} task${i}" style="margin-left: ${style.margin}px;
width: ${style.width}px;" onclick="showTask(${i})"></span>
<span class= "bubble-span task${i}" style = "margin-left: ${style.margin}px;">${categoryAlias[cat]}</span>

*/