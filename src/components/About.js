import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';
import UserContext from "../utils/UserContext";

class About extends Component {

    constructor(props){
        super(props);
        //console.log("Parent Const");
    }

    componentDidMount(){
        //console.log("Parent CompDdidMount");
    }

    render(){
        //console.log("Parent render")
        return (
            <div>
                <h1>About us Class Component</h1>
                <UserContext.Consumer>{({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}</UserContext.Consumer>
                <h2>This is about us React Page..</h2>
                <User name={"Dev functional"}/>
                {/* <UserClass name={"Dev class based"}/> */}
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