import { Component } from "react";

class ClassComponent extends Component{

    state = {
        username:"Mohamed"
    }

    updateBtn = ()=>{
        setTimeout(() => {
            this.setState({username:'Ali'})
        }, 1000);
    }
    
    render(){
        return <>
        <div className="container">
            {this.props.children}
        </div>
        </>
    }
}

export default ClassComponent