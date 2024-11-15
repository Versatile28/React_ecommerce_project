import Dropdown from "react-bootstrap/Dropdown";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function UserAccount(){
    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <AccountCircleIcon/> Account
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="/viewUser">Account Info</Dropdown.Item>
                <Dropdown.Item href="/updateUser">Update Account</Dropdown.Item>
                <Dropdown.Item href="/">Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
export default UserAccount;