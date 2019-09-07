import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    state={
        email:"",
        password:"",

    }

    handleChange=(e)=>{
        this.setState({
            email:e.target.value
        })
    }

    handleChangepass=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    render() {
        return (
            <div className="Home-C">
                <img src={require('../images/23.jpg')} className="Home-A"/>
                <div  className="Home-B" >
                    <h1 className="Home-Z">Selam's Form<i className="fa fa-pencil"></i> <p>please click register</p></h1>
                   


                    <div className="Home-input" >
                        <input type="text"

                               className="Home-input1"
                               placeholder="Email"
                               value={this.state.email}
                               onChange={this.handleChange}/>


                    </div>
                    <div className="Home-input">
                        <input type="password"
                               className="Home-input1"
                               placeholder="Password"
                               value={this.state.password}
                               onChange={this.handleChangepass}/>


                    </div>
                    <div className="Home2-O">

                        <button className="Home2">login</button>
                        <button onClick={this.props.handleClick}className="Home3">Register</button>

                    </div>

                </div>

            </div>
        );
    }
}

export default Home;