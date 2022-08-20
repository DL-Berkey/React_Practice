import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParameterButton } from "./components"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ParameterButton />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
