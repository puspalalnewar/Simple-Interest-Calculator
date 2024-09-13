import { useRef, useState } from 'react';
import './App.css';



function App() {

  const [currInterest, setCurrentInterest] = useState(0);

  const amount = useRef(null);
  const rate = useRef(null);
  const time = useRef(null);
  
  const calculate = ()=>{
    let p = amount.current.value;
    let t = time.current.value;
    let r = rate.current.value;

    // console.log("amount : ", p, "Time : ", t, "Rate : ", r);
    const interest = (p * t * r) / 100;
    setCurrentInterest(interest);
  }

  



  return (
    <div className="container">
      <h1>SI Calculator</h1>
      <div className='box'>
        <div className="interest-box">
          <h2>&#8377; {currInterest}</h2>
        </div>
        <div className="inputs">
          <input ref={amount} type="number" placeholder='Principle amount'/>
          <input ref={rate} type="number" placeholder='Rate of interst(%)'/>
          <input ref={time} type="number" placeholder='Time(Year)'/>
        </div>
        <div className="buttons">
          <button onClick={()=> calculate()} className='calc'>Calculate</button>
          <button className='reset'>Reset</button>
        </div>
      </div>

    </div>
  );
}

export default App;
