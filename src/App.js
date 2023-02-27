import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginComponent from './components/LoginComponent';
import AdminHome from './components/AdminHome';
import TouristHome from './components/TouristHome';
import EmployeeHome from './components/EmployeeHome';
import HomeComponent from './components/HomeComponent';
function App() {
  return (

    <div className="App">
      {/* <h1 className="bg-primary text-white">welcome to world</h1> */}

      <nav className="navbar navbar-expand-sm mb-3 c-navcolor">



        <div className="container-fluid ">

          <div className="c-webname">
              Take A Tour
          </div>

          <ul className="navbar-nav navbar-right ">
            <li className="nav-item ">
              <Link to="/" className="c-navlink px-3">Home</Link>
            </li>
           
            <li className="nav-item">
              <Link to="signup" className="c-navlink px-3">Sign Up</Link>
            </li>

            <li className="nav-item">
              <Link to="login" className="c-navlink px-3">Login</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div > 
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="login" element={<LoginComponent />}></Route>
        <Route path="admin_home" element={<AdminHome />}></Route>
        <Route path="tourist_home" element={<TouristHome />}></Route>
        <Route path="employee_home" element={<EmployeeHome />}></Route>

      </Routes>
      </div>
    </div>
  );
}

export default App;
