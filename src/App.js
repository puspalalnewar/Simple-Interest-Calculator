import { useRef, useState } from 'react';
import './App.css';



function App() {

  const [currInterest, setCurrentInterest] = useState(0);

  const amount = useRef(null);
  const rate = useRef(null);
  const time = useRef(null);

  const calculate = () => {
    let p = amount.current.value;
    let t = time.current.value;
    let r = rate.current.value;

    // console.log("amount : ", p, "Time : ", t, "Rate : ", r);
    const interest = (p * t * r) / 100;
    setCurrentInterest(interest);
  }
  // const calculate = ()=>{
  //   let p = amount.current.value;
  //   let t = time.current.value;
  //   let r = rate.current.value;

  //   // console.log("amount : ", p, "Time : ", t, "Rate : ", r);
  //   const interest = (p * t * r) / 100;
  //   setCurrentInterest(interest);
  // }

  const reset = () => {
    amount.current.value = "";
    rate.current.value = "";
    time.current.value = "";
    setCurrentInterest(0);
  }



  return (
    <div className="container">
      <h1>SI Calculator</h1>
      <div className='box'>
        <div className="interest-box">
          <h2>&#8377; {currInterest}</h2>
        </div>
        <div className="inputs">
          
            <label>Enter Amount</label>
            <br />
            <input ref={amount} type="number" placeholder='Amount' />
            <br />
            <label>Enter Rate</label>
            <br />
            <input ref={rate} type="number" placeholder='Rate of interst' />
            <br />
            <label>Enter Time</label>
            <br />
            <input ref={time} type="number" placeholder='Time' />
          

        </div>
        <div className="buttons">
          <button onClick={() => calculate()} className='calc'>Calculate</button>
          <button onClick={reset} className='reset'>Reset</button>
        </div>
      </div>

    </div>
  );
}

export default App;
