import './App.css';
import { Form } from './pages/Form';
import { CustomHook } from './components/CustomHook';
import { CounterHook } from './components/CounterHook';

function App() {
  const [isVisible, toggle]     = CustomHook();
  const [count, inc, dec, reset]= CounterHook(); 

  return (

    <div className="App">
      <Form/>
            <button onClick={toggle}>
                {isVisible ? "Hide" : "Show"}
            </button>
            {isVisible && <h1 className="visible">The Hidden Text</h1>}

            <p>{count}</p>
            <button onClick={inc}>+</button>
            &nbsp;
            <button onClick={dec}>-</button>
            &nbsp;
            <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
