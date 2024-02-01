import React, {useContext} from 'react';
import UserContext from '../utils/UserContext';

const Contact = () => {
    const {loggedInUser, setUserName} = useContext(UserContext);
    return (
        <>
        <div>
            <h1>Contact Us</h1>
            <h2>Tel: 8907890099</h2>
        </div>
        <div className='m-4 p-4 flex items-center'>
        <label>User Name: </label>
        <input 
        className="ml-2 border border-black rounded-md"
        value ={loggedInUser}
        onChange={(e) => setUserName(e.target.value)}/>
        </div>
      </>
    )
}

export default Contact
