import React, {Component} from 'react';
import './Form2.css';

const initialState={
    firstName:"",
    middleName:"",
    lastName:"",
    Mobile:'',
    username:"",
    Password:"",
    usernameError:"",
    passwordError:''

}
class Form2 extends Component {
    state=initialState

    validate=()=>{
        let  usernameError="";
        let  passwordError="";


        if(!this.state.username.includes('@')){
            usernameError='invalid name'
        }
        if(!this.state.Password){
            passwordError="invalid password"
        }

        if(usernameError || passwordError ){
            this.setState({usernameError ,passwordError});
            return false;
        }
        return true;
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        let isValid=this.validate()
        if(isValid){
            console.log(this.state)
            this.setState(initialState)
            alert('Thank you for submition')
        }


    }


    handleChangefirst=(e)=>{
        this.setState({
            firstName:e.target.value
        })
    }

    handleChangeMidle=(e)=>{
        this.setState({
            middleName:e.target.value
        })
    }

    handleChangeLast=(e)=>{
        this.setState({
            lastName:e.target.value
        })
    }

    handleChangeUser=(e)=>{
        this.setState({
            username:e.target.value
        })
    }

    handleChangepass=(e)=>{
        this.setState({
            Password:e.target.value
        })
    }

    handleChangeMobile=(e)=>{
        this.setState({
            Mobile:e.target.value
        })
    }




    render() {
        return (
            <div className="Form2-E">
                <img src={require('../images/12.jpg')} className="Form2-H"/>
                <div className="Form2-F">
                    <h1 className="Form2-G">WELCOME!</h1>

                    <p>Please Fill the Form</p>

                    <form style={{marginLeft:150}} onSubmit={this.handleSubmit} >
                        <div className="Form2-C">

                            <div className="Form2-input" >
                                <input type="text"
                                       placeholder="FirstName"
                                       value={this.state.firstName}
                                       onChange={this.handleChangefirst} />
                            </div>

                            <div className="Form2-input">
                                <input type="middleName"
                                       placeholder="MiddleName"
                                       value={this.state.middleName}
                                       onChange={this.handleChangeMidle} />
                            </div>

                            <div className="Form2-input">
                                <input type="lastName"
                                       placeholder="LastName"
                                       value={this.state.lastName}
                                       onChange={this.handleChangeLast} />
                            </div>

                            <div className="Form2-input">
                                <input type="mobile"
                                       placeholder="Mobile"
                                       value={this.state.Mobile}
                                       onChange={this.handleChangeMobile} />
                            </div>
                            <div className="Form2-input">
                                <input type="username"
                                       placeholder="Username"
                                       value={this.state.username}
                                       onChange={this.handleChangeUser} />
                                <div className="">{this.state.usernameError}</div>

                            </div>
                            <div className="Form2-input">
                                <input type="password"
                                       placeholder="Password"
                                       value={this.state.password}
                                       onChange={this.handleChangepass} />
                                <div className="">{this.state.passwordError}</div>
                            </div>
                            <button type="submit"className="Form2-B">Submit</button>
                        </div>


                    </form>
                </div>

            </div>
        );
    }
}

export default Form2;