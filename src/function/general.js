// == How to import ==
// import {FunctionName} from ../function/general.js

//hh:mm形式で時間目盛りを30分刻みに生成
//widthが23より小さいなら分数を省略
export function calcNumOfScale(time) {
    const openMin = convertTimesToMins(time.opening);//570
    const closeMin = convertTimesToMins(time.closing);//1080
    const workingMin = closeMin - openMin;//540
    const numOfScale = workingMin / 30;//18等分
    return numOfScale;
}

export function setTimeScale(time) {
    const timeScale = [];
    const numOfScale = calcNumOfScale(time);
    const openMin = convertTimesToMins(time.opening);
    for (let i = 0; i <= numOfScale; i++) {
        timeScale[i] = String((openMin + (i * 30)) / 60);
        if (timeScale[i].slice(-2) === '.5') {
            timeScale[i] = '';
        } else {
            timeScale[i] = parseInt(timeScale[i]) % 24 + ':00';
        }
    }
    
    return timeScale;
}

//hhmm->minに変換
export function convertTimesToMins(time) {
    let hour = Math.floor(time / 100);
    let min = time % 100;
    return hour * 60 + min;
}

export function calcStyle(task, perWidth, time) {
    const start = convertTimesToMins(task.startTime);
    const end = convertTimesToMins(task.endTime);
    const duration = end - start;
    // 始業からタスク開始までの分数
    const startTaskMin = start - convertTimesToMins(time.opening);
    // 1分あたりのバブルの長さ[px]
    const widthAboutMin = perWidth / 60;
    // スケール数と剰余分数の計算
    const widthAboutScale = Math.floor(startTaskMin / 30);
    const widthModule = startTaskMin % 30;
    const durationAboutScale = Math.floor(duration / 30);
    const durationModule = duration % 30;
    //スケール長 * スケール数 + バブル長 * 剰余分数
    const style = {
        marginLeft: perWidth * widthAboutScale + widthModule * widthAboutMin,
        width: perWidth * durationAboutScale + durationModule * widthAboutMin,
    };
    return style;
}

