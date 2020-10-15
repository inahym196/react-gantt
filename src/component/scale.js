import React from 'react';
import {setTimeScale} from '../function/general'

function Scale(props) {

    const timeScale = setTimeScale(props.time, props.width);
    const perWidth = props.width / (timeScale.length) - 0.1;
    const renderScale = timeScale.map((w,i) =>
        <li key={i} style={{ width: perWidth }}>{w}</li>
    );
    return (
        <div id='scale'>
            <ul>
                {renderScale}
            </ul>
        </div>
    );
}

export default Scale;