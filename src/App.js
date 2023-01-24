import logo from './logo.svg';
import './App.css';
import { useSTate } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [litres, setLitres] = useState(0);
  const [gramsLeft, setGramsLeft] = useState(0);
  const [burning, setBurning] = useState(0);
  const [result, setResult] = useState(0);

  function calculate(e) {
    e.preventDefault();
    setLitres(bottles * 0.33);
    const setGrams = (litres * 8 * 4.5);
    setBurning(weight / 10);
    setGramsLeft(setGrams - (burning * time));

    if (gender = male) {
      setResult(grams / (weight * 0.7));
    } else {
      setResult(grams / (weight * 0.6));
    }
  }

  return (
    <form>
      <h3>Calculating alcohol blood level</h3>
      <div>
        <labe>Weight</labe>
        <input></input>
      </div>
      <div>
        <label>Bottles</label>
        <input></input>
      </div>
      <div>
        <label>Time</label>
        <input></input>
      </div>
      <div>
        <label>Gender</label>
        <button type="radio"></button>
        <label>Male</label>
        <button type="radio"></button>
        <label>Female</label>
      </div>
      <output></output>
      <button>Calculate</button>
    </form>
  );
}

export default App;
