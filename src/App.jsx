import { BrowserRouter,Routes,Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landing from "./Components/Landing";
import AdminLogin from "./Components/AdminLogin";
import UserLogin from "./Components/UserLogin";
import UserSignUp from "./Components/UserSignUp";
import UserHomePage from "./Components/UserHomePage";
import AdminSignUp from "./Components/AdminSignUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHomePage from "./Components/AdminHomePage";
import Error from "./Components/Error";


const App = () => {
  return ( 
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Error/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/adminsignup' element={<AdminSignUp/>}/>
        <Route path='/adminhomepage/*' element={<AdminHomePage/>}/>
        <Route path='/usersignup' element={<UserSignUp/>}/>
        <Route path='/userhomepage/*' element={<UserHomePage/>}/>
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
   );
};
 
export default App;