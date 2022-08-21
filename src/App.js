import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, ParameterPage, QueryPage, ReducerPage, AsyncPage } from "./components"
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
          <Route path="/asyncpage" element={<AsyncPage />} />
        </Routes>
      </Router>
    </Main>
  );
}

export default App;
