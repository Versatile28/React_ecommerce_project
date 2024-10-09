import { Link } from 'react-router-dom';

const Landing = () => {
    return ( 
        <div className="landing">
            <Link to='/adminlogin'>
                <h1>Admin</h1>
            </Link>
            <Link to='/userlogin'>
                <h1>User</h1>
            </Link>
        </div>
     );
}
 
export default Landing;