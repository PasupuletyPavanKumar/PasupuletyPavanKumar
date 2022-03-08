import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/screens/main/Main";
import { Routes, Route } from "react-router-dom";
import ForgotPassword from "./components/screens/authentication/ForgotPassword";
import Dashboard from "./components/screens/authentication/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* <Route path="forgot" element={<ForgotPassword />} /> */}
    </Routes>
  );
}

export default App;
