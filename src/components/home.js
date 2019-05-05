import React from 'react'
import {Redirect} from 'react-router-dom';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        console.log(this.props.isAuth);
    }

    render(){
        return (
            this.props.isAuth?(<div className="Home">
            Home
        </div>):<Redirect to='/'></Redirect>
        )
    }
}

export default Home;