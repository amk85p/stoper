import React, { useState, useEffect } from 'react';
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import TimeCounter from './components/TimeCounter/TimeCounter';


const App=()=> {
  const [time, setTime] = useState(0)
  // const [timerOn, setTimeOn] = useState(false)
  const [timer, setTimer] = useState(null)

  useEffect(() => {
    return () => {
       clearInterval(timer);
    };
  }, []);

  const start = () => {
    setTimer(setInterval(() => {
      setTime(prevTime => prevTime + 10)
    }, 10))
  };

  const stop = () => {
    clearInterval(timer)
    setTimer(null)
  }
 
  const reset = () => {
    setTime(0)}
  

  return (
    <Container>
      
      <h1>Stoper</h1>
      
      <TimeCounter time={time} /> 
      
      <span onClick={start}><Button >start</Button></span>
      <span onClick={stop}><Button >stop</Button></span>
      <span onClick={reset}><Button >reset</Button></span>
    </Container>
  );
}

export default App;

