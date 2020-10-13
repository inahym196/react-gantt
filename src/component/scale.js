import React from 'react';

function Scale(props) {

    let time = {
        //開始時間と終了時間
        opening: 930,
        closing: 1800
    };
    const timeScale = setTimeScale(time, props.width);
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
//
export default Scale;

//hh:mm形式で時間目盛りを30分刻みに生成
//widthが23より小さいなら分数を省略
function setTimeScale(time, width) {
    const openMin = convertTimesToMins(time.opening);//570
    const closeMin = convertTimesToMins(time.closing);//1080
    const workingMin = closeMin - openMin;//540
    const timeScale = [];
    const scaleDiv = workingMin / 30;//18等分
    for (let i = 0; i <= scaleDiv; i++) {
        timeScale[i] = String((openMin + (i * 30)) / 60);
        if (timeScale[i].slice(-2) === '.5') {
            timeScale[i] = '';
        } else if (width < 400) {
            timeScale[i] = parseInt(timeScale[i] % 24) + '';
        } else {
            timeScale[i] = parseInt(timeScale[i]) % 24 + ':00';
        }
    }
    return timeScale;

}

//hhmm->minに変換
function convertTimesToMins(time) {
    let hour = Math.floor(time / 100);
    let min = time % 100;
    return hour * 60 + min;
}