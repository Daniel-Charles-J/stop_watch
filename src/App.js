import BtnComponent from './Component/BtnComponent';
import DisplayComponent from './Component/DisplayComponent';
import { useState } from 'react';
import './App.css';



function App() {
  const[time, setTime] = useState({ hr : 0, m : 0, s : 0, ms : 0})
  const [clear, setClear] = useState();
  const [status, setStatus] = useState(0);

  function run(){
    if(time.m === 60){
      time.hr++;
      time.m = 0;
    }
    if(time.s === 60){
      time.m++;
      time.s = 0;
    }
    if(time.ms === 100){
      time.s++;
      time.ms = 0;
    }
    time.ms++;
    setTime({hr : time.hr, m : time.m, s : time.s, ms : time.ms})
  }


  function start(){
    setClear(setInterval(run,1));
    setStatus(1);
  }

  function stop(){
    clearInterval(clear);
    setStatus(0);
  }

  function reset(){
    clearInterval(clear);
    setTime({hr : 0, m : 0, s : 0, ms : 0});
    setStatus(0);
  }

  return (
    <div className="App">
      <DisplayComponent time = {time}></DisplayComponent>
      <BtnComponent start = {start} stop = {stop} status = {status} reset = {reset}/>
    </div>
  );
}

export default App;
