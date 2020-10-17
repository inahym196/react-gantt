import React from 'react';
import GanttChart from './component/ganttchart';
import 'siimple'

function App() {
  console.log("< app >");
  return (
    <div id='App'>
      <div id='AppHeader'>
        <p>Test Web Site</p>
      </div>
      <div id='AppBody'>
        <h2>GanttChart</h2>
        <GanttChart />
      </div>
    </div>
  );
}
//<Clock />
export default App;