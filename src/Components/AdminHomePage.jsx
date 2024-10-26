import AdminNavbar from "./AdminNavbar";
import AdminDashboard from "./AdminDashboard";
import { Routes,Route } from 'react-router-dom';
import AdminViewItems from "./AdminViewItems";

const AdminHomePage = () => {
    return ( 
        <div className="AdminHomePage">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdminDashboard/>}/>
                <Route path="/viewproducts" element={<AdminViewItems/>}/>
            </Routes>
        </div>
     );
}
 
export default AdminHomePage;