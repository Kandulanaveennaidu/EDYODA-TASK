import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import FrontView from "./pages/FrontView";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<FrontView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
