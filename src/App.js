import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParameterForm, QueryForm } from "./components"
import { Main } from "./styles"

function App() {
  return (
    <Main>
      <Router>
        <Routes>
          <Route path="/" element={[<ParameterForm />, <QueryForm />]} />
        </Routes>
      </Router>
    </Main>
  );
}

export default App;
