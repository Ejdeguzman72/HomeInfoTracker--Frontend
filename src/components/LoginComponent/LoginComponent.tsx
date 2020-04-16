import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router';
import { Button } from 'react-bootstrap';

export default class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
          username: '',
          password: '',
          shouldRedirect: false
      };  

        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
      }

      
// CHANGE IS BEING CALLED WITHIN THE TWO INPUT FIELDS
// USERNAME AND PASSPORT
    change(e:any){
      this.setState({
          [e.target.name]: e.target.value
      });
  }

// CALLING MY API TO CREATE THE TOKEN
// THIS FUNCTION WILL BE CALLED ON THE LOGIN BUTTON ONCLICK EVENT LISTENER
  submit(e: any){
      e.preventDefault();
      Axios.post('http://localhost:8080/authenticate', {
          username: this.state.username,
          password: this.state.password
        }).then(res =>  {
          localStorage.setItem('EJ-token', res.data.token)
          this.setState({
            shouldRedirect: true
          });
          window.location.reload();
          console.log(res.data.token);
          alert(`${this.state.username} has logged in!`);
      }).catch(() => {
          alert("Incorrect User Name Or Password");
      })    
  }

render() {
    return(
    <div className="login-container">
      {this.state.shouldRedirect ? <Redirect to = "/home"/>: null}
      <label htmlFor="password" className="login-input-label">Username</label>
      <input type="text" name="username" className="login-input" placeholder="username" onChange={e => this.change(e)} value={this.state.username}/>
      <br></br><br></br>
      <label htmlFor="password" className="login-input-label">Password</label>
      <input type="password" name="password" className="login-input" placeholder="password" onChange={e => this.change(e)} value={this.state.password}/>
      <br></br><br></br>
      <Button type="button" size="lg" className="btn-dark" onClick ={(e: any) => this.submit(e)}>
        Login
      </Button>
      <br></br><br></br>
      <Button type="button" size="lg" className="btn-dark">
        Register
      </Button>
    </div>
    )
  }
}