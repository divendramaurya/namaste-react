import React from 'react'

class UserClass extends React.Component {

    constructor(props){
        super(props);
        console.log("Child Const")
        this.state = {
            count: 10,
            count1: 11,
        }
    }

    componentDidMount(){
        console.log("Child CompDdidMount");
    }

    render(){
        console.log("Child render")
        const {count, count1} = this.state;
        return(
            <div className='user-card'>
                <h1>{count}</h1>
                <button onClick= {() => {
                    this.setState({
                        count : this.state.count + 1,
                    })
                }}>click class</button>
                <h1>Name: {this.props.name}</h1>
                <h2>Location:: Thane</h2>
                <h3>Contact: dev@gmail.com</h3>
            </div>
        )
    }
}

export default UserClass;