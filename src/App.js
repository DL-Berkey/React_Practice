import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParameterButton, QueryButton } from "./components"
import { Main } from "./styles"

function App() {
  return (
    <Main>
      <Router>
        <Routes>
          <Route path="/" element={[<ParameterButton />, <QueryButton />]} />
        </Routes>
      </Router>
    </Main>
  );
}

export default App;
