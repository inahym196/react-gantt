import React from 'react';
import styled from 'styled-components';
import Clock from './component/clock';
import GanttChart from './component/gantt';

function App() {
  console.log("< app >");
  return (
    <ReactApp>
      <AppHeader>
        <p>Test Web Site</p>
      </AppHeader>
      <AppBody>
        <h2>GanttChart</h2>
        <GanttChart />
      </AppBody>
    </ReactApp>
  );
}
//<Clock />
export default App;

const ReactApp = styled.div`
  
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppBody = styled.div`
  @media screen and (max-width:768px){
    padding: 5vh 5vw;
  }
  @media screen and (min-width:769px){
    padding: 5vh 10vw;
  }
`;

function Box() {
  return (
    <Div>
      <div style={{ background: 'red' }}></div>
      <div style={{ background: 'blue' }}></div>
      <div style={{ background: 'green' }}></div>
      <div style={{ background: 'purple' }}></div>
      <div style={{ background: 'yellow' }}></div>
      <div style={{ background: 'black' }}></div>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  div{
    width:  9vw;
    height: 9vw;
  }
`;