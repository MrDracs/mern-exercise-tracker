import { Component } from "react";
import axios from "axios";
export default class CreateUser extends Component{
    
    constructor(props){
        super(props);
        // bind this to the methods
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // set the initial state
        this.state = {
            username: '',
        }
    }
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const user = {
            username: this.state.username,
        }
        console.log(user);
        this.setState({
            username: ''
        });
        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));
        
    }
    render() {
        return (
            <div>
                <h1>Create User</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername}/>
                    </div>
                    <div className="form-group" style={
                        {
                            marginTop: 10
                        }
                    }>
                        <input type="submit" value="Create User" className="btn btn-primary" style={
                            {
                                width:"100%",
                                fontWeight: "bold",
                                background:"rgb(33,37,41)",
                            }
                        }/>
                    </div>
                </form>
            </div>
        )
    }
}