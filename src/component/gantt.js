import React from 'react';
import './gantt.css';
import Chart from './chart'
import Crud from './crud'

function GanttChart() {
    return (
        <div id='gantt-area'>
            <Chart />
            <Crud />
        </div>
    );
}

export default GanttChart;

/*
export default class GanttChart extends React.Component {
    render() {
        return (
            
        );
    }
}
*/
