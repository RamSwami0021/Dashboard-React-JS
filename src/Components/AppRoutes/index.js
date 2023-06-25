import {  Route, Routes } from "react-router-dom";
import Customers from "../../Pages/Customers";
import Dashboard from "../../Pages/Dashbaord";
import Projects from "../../Pages/Projects"
import Opporunity from "../../Pages/Opporunity"
import Solution from "../../Pages/Solution"
import MyProposals from "../../Pages/MyProposals"
import MyProfile from "../../Pages/MyProfile"
import Logout from "../../Pages/Logout"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
      <Route path="/Projects" element={<Projects />}></Route>
      <Route path="/Opporunity" element={<Opporunity />}></Route>
      <Route path="/Solution" element={<Solution />}></Route>
      <Route path="/MyProposals" element={<MyProposals />}></Route>
      <Route path="/MyProfile" element={<MyProfile />}></Route>
      <Route path="/Logout" element={<Logout />}></Route>
    </Routes>
  );
}
export default AppRoutes;
