import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./comonents/Header";
import "./styles/App.scss"

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
