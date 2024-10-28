import AdminNavbar from "./AdminNavbar";
import AdminDashboard from "./AdminDashboard";
import { Routes,Route } from 'react-router-dom';
import AdminViewItems from "./AdminViewItems";
import AdminAddProducts from "./AdminAddProducts";

const AdminHomePage = () => {
    return ( 
        <div className="AdminHomePage">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdminDashboard/>}/>
                <Route path="/viewproducts" element={<AdminViewItems/>}/>
                <Route path="/addproducts" element={<AdminAddProducts/>}></Route>
            </Routes>
        </div>
     );
}
 
export default AdminHomePage;