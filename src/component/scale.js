import React from 'react';
import {setTimeScale} from '../function/general'

function Scale(props) {
    const timeScale = setTimeScale(props.time);
    const renderScale = timeScale.map((w,i) =>
        <li key={i} style={{ width: props.perWidth }}>{w}</li>
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