import { Routes,Route } from 'react-router-dom';
import UserNavBar from "./UserNavBar";
import UserDashboard from "./UserDashboard";
import UserViewItems from "./UserViewItems";

const UserHomePage = () => {
    return ( 
        <div className="UserHomePage">
            <UserNavBar/>
            <Routes>
                <Route path="/" element={<UserDashboard/>}/>
                <Route path="/viewproducts" element={<UserViewItems/>}/>
            </Routes>
        </div>
     );
}

export default UserHomePage;