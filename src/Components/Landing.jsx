import { Link } from 'react-router-dom';
import '../styles/Landing.css'

const Landing = () => {
    return ( 
        <div className="landing">
            <Link to='/adminlogin'>
                <img src="../admin_logo.png" alt="" />
                <h1>Admin</h1>
            </Link>
            <Link to='/userlogin'>
                <img src="../user_logo.png" alt="" />
                <h1>User</h1>
            </Link>
        </div>
     );
}
 
export default Landing;