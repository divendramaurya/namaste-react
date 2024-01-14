import { useState, useEffect } from "react";
import { useFetcher } from "react-router-dom";

const User = (props) => {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(1);

    useEffect(() => {
        console.log('uE');
        // const timer =  setInterval(() => {
        //     console.log('f setim')
        // }, 1000);
        return (() => {
            console.log('uE return');
            // clearInterval(timer);
        })
    }, []);

    console.log('render');

    return(
        <div className='user-card'>
            <h1>{count}</h1>
            <button onClick ={() => {
                setCount(count + 1);
            }}>click fun</button>
            <h1>Name: {props.name}</h1>
            <h2>Location: Thane</h2>
            <h3>Contact: dev@gmail.com</h3>
        </div>
    )
}

export default User;