import "./App.css";
import { ThemeProvider } from "./hooks/useContext/useContext";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router basename="devAddict">
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:name" element={<Projects/>} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
