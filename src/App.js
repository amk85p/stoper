import React, { useState } from 'react';
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import Numbers from './components/Numbers/Numbers';


const App=()=> {
  const [time, setTime] = useState(0)
  const [timerOn, setTimeOn] = useState(false)

  React.useEffect (() => {
    let interval = null;

   if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10);
    } else {
      clearInterval(interval)
    }
    return() => clearInterval(interval)
  },[timerOn])
  // console.log(time)
  //const ttime = 86400000; // # 1 day , 24h, 24:00:00
  //const ttime = 43200000; // # 0,5 day , 12h, 12:00:00
  //const ttime = 21600000; // # 0,25 day , 6h, 6:00:00
  return (
    <Container>
      
      <h1>Stoper</h1>
      <Numbers>
      <div> 
      <span >{('0' + Math.floor((time / 3600000) % 60)).slice(-2)}</span><span>:</span>
      <span >{('0' + Math.floor((time / 60000) % 60)).slice(-2)}</span><span>:</span>
      <span >{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span><span>.</span>
      <span >{('0' + ((time /10) % 100)).slice(-2)}</span>
      </div>
      </Numbers>
      <span onClick={() => setTimeOn(true) }><Button >start</Button></span>
      <span onClick={() => setTimeOn(false)}><Button >stop</Button></span>
      <span onClick={() => setTime(0)}><Button >reset</Button></span>
    </Container>
  );
}

export default App;

