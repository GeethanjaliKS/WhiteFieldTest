import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './Components/Header';
import Register from './Components/login';
import Login from './Components/login';
import EmployeeForm from './Components/EmployeeForm';
import EmpTable from './Components/EmpTable';
import UpadteFarm from './Components/UpdateFarm';
import AdminPage from './Components/AdminPage';
import { useEffect, useState } from 'react';
import Home from './Components/Home';

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [adminname,setAdminname] = useState(' ');

  useEffect(() => {
  const user=localStorage.getItem("user");
  
  const adminName = user ? JSON.parse(user).f_username : '';
  setAdminname(adminName);
  if(user){
    setIsLoggedIn(true);
  }},[])
  return (
    <div>
      <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} adminname={adminname}/>
      <Routes>
      <Route exact path="/login" element={ <Login setIsLoggedIn={setIsLoggedIn}/>} />
      <Route exact path="/emp" element={ <EmployeeForm/>} />
      <Route exact path="/emptable" element={ <EmpTable/>} />
      <Route exact path="/updatefarm" element={ < UpadteFarm/>} />
      <Route exact path="/adminpage" element={ < AdminPage/>} />
      {/* <Route exact path="/" element={ < Home/>} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
