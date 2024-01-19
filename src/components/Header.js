import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    //let  btnName = 'login';
    const [btnName, setBtnName] = useState("login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-pink-100 shadow-md mb-2 px-2 py-3">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className='px-4'>Online Status: {onlineStatus ? '🟢' : '🔴'}</li>
                    <li className='px-4'>
                        <Link to='/'>Home.</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='contact'>Contact Us.</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='grocery'>Grocery</Link>
                    </li>
                    <li className='px-4'>Cart.</li>
                    <button 
                    className='login-btn'
                    onClick={() => {
                        btnName === "login" ? setBtnName('logout') : setBtnName('login');
                        console.log("btnName", btnName);
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;