import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);

  const [litres, setLitres] = useState(0);
  const [gramsLeft, setGramsLeft] = useState(0);
  const [burning, setBurning] = useState(0);
  
  const [gender, setGender] = useState(0);
  const [result, setResult] = useState(0);

  function calculate(e) {
    e.preventDefault();

    setLitres(bottles * 0.33);
    const grams = (litres * 8 * 4.5);
    
    setBurning(weight / 10);
    setGramsLeft(grams - (burning * time));

    if (gender === "male") {
      setResult(gramsLeft / (weight * 0.7));
    } else if (gender === "female") {
      setResult(gramsLeft / (weight * 0.6));
    }

    if (result < 0) {
      setResult(0);
    }
  }

  return (
    <div>
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Weight</label>
          <input name="weight" type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>Bottles</label>
          <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <label>Time</label>
          <select name="time" value={time} onChange={e => setTime(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)}></input><label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}></input><label>Female</label>
        </div>
        <div>
          <output>{result.toFixed(2)}</output>
        </div>
        <div>
          <button>Calculate</button>
        </div>
      </form>
        <label>If you change the amount of bottles click calculate three times, if you change time click calculate twice</label>
    </div>
  );
}

export default App;