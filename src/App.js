import './App.css';

function App() {
  return (
    <div className="container">
      <h1>SI Calculator</h1>
      <div className='box'>
        <div className="interest-box">
          <h2>&#8377; 2000</h2>
        </div>
        <div className="inputs">
          <input type="number" placeholder='Principle amount'/>
          <input type="number" placeholder='Rate of interst(%)'/>
          <input type="number" placeholder='Time(Year)'/>
        </div>
        <div className="buttons">
          <button className='calc'>Calculate</button>
          <button className='reset'>Reset</button>
        </div>
      </div>

    </div>
  );
}

export default App;
