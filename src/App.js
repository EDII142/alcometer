import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [litres, setLitres] = useState(0);
  const [gramsLeft, setGramsLeft] = useState(0);
  const [burning, setBurning] = useState(0);
  const [result, setResult] = useState(0);
  const [male, setMale] = useState(0);
  const [female, setFemale] = useState(0);

  function calculate(e) {
    e.preventDefault();
    setLitres(bottles * 0.33);
    const grams = (litres * 8 * 4.5);
    setBurning(weight / 10);
    setGramsLeft(grams - (burning * time));

    if (male = true) {
      setResult(gramsLeft / (weight * 0.7));
    } else if (female = true) {
      setResult(gramsLeft / (weight * 0.6));
    }

    if (result < 0) {
      setResult = 0;
    }
  }

  return (
    <form onSubmit={calculate}>
      <h3>Calculating alcohol blood level</h3>
      <div>
        <labe>Weight</labe>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
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
        <input type="radio" name="male" value={male} onChange={e => setMale(e.target.value)}></input>
        <label>Male</label>
        <input type="radio" name="female" value={female} onChange={e => setFemale(e.target.value)}></input>
        <label>Female</label>
      </div>
      <div>
        <output>{result.toFixed(2)}</output>
      </div>
      <div>
        <button>Calculate</button>
      </div>
    </form>
  );
}

export default App;
