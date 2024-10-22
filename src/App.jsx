import { BrowserRouter,Routes,Route } from "react-router-dom";
import Landing from "./Components/Landing";
import AdminLogin from "./Components/AdminLogin";
import UserLogin from "./Components/UserLogin";
import AdminSignUp from "./Components/AdminSignUp";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return ( 
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/adminsignup' element={<AdminSignUp/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
   );
};
 
export default App;