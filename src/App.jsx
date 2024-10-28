import { BrowserRouter,Routes,Route } from "react-router-dom";
import Landing from "./Components/Landing";
import AdminLogin from "./Components/AdminLogin";
import UserLogin from "./Components/UserLogin";
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
        <Route path='/adminsignup' element={<AdminSignUp/>}></Route>
        <Route path='/adminhomepage/*' element={<AdminHomePage/>}></Route>
        
      </Routes>
      </BrowserRouter>
    </div>
   );
};
 
export default App;