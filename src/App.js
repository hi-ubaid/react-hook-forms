import './App.css';
import { Form } from './pages/Form';
import { CustomHook } from './components/CustomHook';

function App() {
  const [isVisible, toggle] = CustomHook();
  return (

    <div className="App">
      <Form/>
            <button onClick={toggle}>
                {isVisible ? "Hide" : "Show"}
            </button>

            {isVisible && <h1 className="visible">The Hidden Text</h1>}
    </div>
  );
}

export default App;
