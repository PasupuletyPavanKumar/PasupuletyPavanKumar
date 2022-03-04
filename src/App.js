import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/screens/main/Main";
import { Routes, Route } from "react-router-dom";
import ForgotPassword from "./components/screens/authentication/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* <Route path="forgot" element={<ForgotPassword />} /> */}
    </Routes>
  );
}

export default App;
