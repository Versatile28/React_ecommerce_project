import { Link } from 'react-router-dom';

const Landing = () => {
    return ( 
        <div className="landing">
            <Link to='./AdminLogin.jsx'>
                <h1>Admin</h1>
            </Link>
            <Link to='./UserLogin.jsx'>
                <h1>User</h1>
            </Link>
        </div>
     );
}
 
export default Landing;