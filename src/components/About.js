import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {

    constructor(props){
        super(props);
        console.log("Parent Const");
    }

    componentDidMount(){
        console.log("Parent CompDdidMount");
    }

    render(){
        console.log("Parent render")
        return (
            <div>
                <h1>About us Class Component</h1>
                <h2>This is about us React Page..</h2>
                {/* <User name={"Dev functional"}/> */}
                <UserClass name={"Dev class based"}/>
            </div>
        ) 
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About us</h1>
//             <h2>This is about us React Page..</h2>
//             {/* <User name={"Dev functional"}/> */}
//             <UserClass name={"Dev class based"}/>
//         </div>
//     )
// }

export default About; 