import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParameterForm, QueryForm, ParameterPage } from "./components"
import { Main } from "./styles"

function App() {
  return (
    <Main>
      <Router>
        <Routes>
          <Route path="/" element={[<ParameterForm />, <QueryForm />]} />
          <Route path="/:value" element={<ParameterPage />}></Route>
        </Routes>
      </Router>
    </Main>
  );
}

export default App;
