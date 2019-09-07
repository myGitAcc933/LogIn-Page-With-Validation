import React, { Component } from 'react';

import './App.css';
import Form2 from "./Component/Form2";
import Home from "./Component/Home";


class App extends Component {
    state = {
        ShowComponent: "Home"
    }
    handleClick=()=>{
        this.setState({
            ShowComponent: "Form2"
        })
    }
    render() {
        if (this.state.ShowComponent === "Home") {
            return (
                <div>
                    <Home handleClick={this.handleClick}/>
                </div>
            );
        } else if (this.state.ShowComponent === "Form2") {
            return (
                <div>
                    <Form2/>
                </div>
            );
        }
        return true;
    }
}
export default App;