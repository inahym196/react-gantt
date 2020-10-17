import React, { useEffect, useState } from 'react';
import { convertTimesToMins } from '../function/general.js';

function TimeLine(props) {
    const [timeStyle, setTimeStyle] = useState(null);

    function timeLineUpdate() {
        const nowTime = new Date();
        const hour = nowTime.getHours();
        const minute = nowTime.getMinutes();
        const start = convertTimesToMins(hour + "" + minute);
        const startTimeMin = start - convertTimesToMins(props.time.opening);
        const widthAboutMin = props.perWidth / 30;
        const widthAboutScale = Math.floor(startTimeMin / 30);
        const widthModule = startTimeMin % 30;
        const timeStyle = props.perWidth * widthAboutScale + widthModule * widthAboutMin;
        setTimeStyle(timeStyle)
    }
    
    useEffect(() => {
        timeLineUpdate();
    })

    return <div id='timeline' style={{ marginLeft: timeStyle }}></div>
}
export default TimeLine;