import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/screens/main/Main";
import { Routes, Route, useNavigate } from "react-router-dom";
// import ForgotPassword from "./components/screens/authentication/ForgotPassword";
// import Dashboard from "./components/screens/authentication/Dashboard";
import Home from "./components/screens/dashboard/Home";
import { useEffect } from "react";

//Description:App function defines the route path to the different element of the project

function App() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (sessionStorage.getItem("accessToken")) {
  //     navigate("/dashboard");
  //   } else navigate("");
  // }, []);

  return (
    <Routes>
      {/*navigate to the login screens*/}
      <Route path="" element={<Main />} />
      {/*navigate to the dashboard screens*/}
      <Route path={"/dashboard"} element={<Home />} />
      <Route path="/notification" element={<Home />} />
      <Route path="/reports" element={<Home />} />
      <Route path="/admin" element={<Home />} />
      <Route path="/assignToUser" element={<Home />} />
      <Route path="/assignToMe" element={<Home />} />
      <Route path="/uploadAssign" element={<Home />} />
      <Route path="/server" element={<Home />} />
      <Route path="/settings" element={<Home />} />
      <Route path="/help" element={<Home />} />

      {/* <Route path="forgot" element={<ForgotPassword />} /> */}
    </Routes>
  );
}

export default App;
