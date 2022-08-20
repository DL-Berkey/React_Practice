import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, ParameterPage, QueryPage, ReducerPage } from "./components"
import { Main } from "./styles"

function App() {
  return (
    <Main>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/params/:value" element={<ParameterPage />} />
          <Route path="/query" element={<QueryPage />} />
          <Route path="/reducerpage" element={<ReducerPage />}/>
        </Routes>
      </Router>
    </Main>
  );
}

export default App;
