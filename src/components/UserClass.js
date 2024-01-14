import React from 'react'

class UserClass extends React.Component {

    constructor(props){
        super(props);
        //console.log("Child Const")
        this.state = {
            //count: 10,
            userInfo: {
                name: "Dummy",
                company: "default",
                avatar_url: 'https://www.dummy.com'
            }
        }
    }

    async componentDidMount(){
        this.timer = setInterval(() => {
            console.log('hello');
        }, 1000)
        //console.log("Child CompDdidMount");
        // https://api.github.com/users/divendramaurya
        const data = await fetch('https://api.github.com/users/divendramaurya');
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json
        })
    }

    componentDidUpdate(){
        console.log("cdu called");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log('cwum called')
    }

    render(){
        //console.log("Child render")
        const {count} = this.state;
        const {name, company, avatar_url} = this.state.userInfo;
        return(
            <div className='user-card'>
                {/* <h1>{count}</h1>
                <button onClick= {() => {
                    this.setState({
                        count : this.state.count + 1,
                    })
                }}>click class</button> */}
                <img src={avatar_url}></img> 
                <h1>Name: {name}</h1>
                <h1>Company: {company}</h1>
                <h2>Location:: {this.state.userInfo?.location}</h2>
                <h3>Contact: dev@gmail.com</h3>
            </div>
        )
    }
}

export default UserClass;