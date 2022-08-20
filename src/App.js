import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParameterForm, QueryForm, ParameterPage, QueryPage } from "./components"
import { Main } from "./styles"

function App() {
  return (
    <Main>
      <Router>
        <Routes>
          <Route path="/" element={[<ParameterForm />, <QueryForm />]} />
          <Route path="/params/:value" element={<ParameterPage />}></Route>
          <Route path="/query" element={<QueryPage />}></Route>
        </Routes>
      </Router>
    </Main>
  );
}

export default App;
