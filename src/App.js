import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/screens/main/Main";
import { Routes, Route } from "react-router-dom";
import ForgotPassword from "./components/screens/authentication/ForgotPassword";
import Dashboard from "./components/screens/authentication/Dashboard";

//Description:App function defines the route path to the different element of the project

function App() {
  return (
    <Routes>
      {/*navigate to the login screens*/}
      <Route path="/" element={<Main />} />
      {/*navigate to the dashboard screens*/}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* <Route path="forgot" element={<ForgotPassword />} /> */}
    </Routes>
  );
}

export default App;
