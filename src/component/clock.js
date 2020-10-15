import React, { useEffect, useState } from 'react';

function Clock() {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setTimer(new Date()), 1000)
    
    return () => {
      clearInterval(timerID);
    };
  }, [])

  return (
    <>
      {timer.toLocaleTimeString()}
    </>
  );
}
export default Clock;


/*
export default class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount(){
    this.timerID = setInterval( () => this.tick(),1000 )
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState( {date: new Date()} );
  }

  render(){
    return (
      <>
        {this.state.date.toLocaleTimeString()}
      </>
    );
  }
}
*/
