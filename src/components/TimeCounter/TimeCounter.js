

import styles from './TimeCounter.module.scss';

const TimeCounter = ({ time }) => {
  const formatTime = time => {
    const mseconds = (('' + ((time /10) % 100)).padStart(2,'0'))
    const seconds = (('' + Math.floor((time / 1000) % 60)).padStart(2,'0'))
    const minuts =  (('' + Math.floor((time / 60000) % 60)).padStart(2,'0'))
    const hours = (('' + Math.floor((time / 3600000) % 60)).padStart(2,'0'))


    const formatedTime = hours +':'+ minuts +':'+ seconds +'.'+ mseconds 
    return formatedTime
  };

       
    return (
      <div className= {styles.numbers}>
         {formatTime(time)}
      </div>
    );
    }
export default TimeCounter;
