import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router';

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
          // window.location.reload();
          console.log(res.data.token);
          alert(`${this.state.username} has logged in!`);
      }).catch(() => {
          alert("Incorrect User Name Or Password");
      })
      
  }

render() {
    return(
    <div className="Main_login_div">
      {this.state.shouldRedirect ? <Redirect to = "/home"/>: null}
      <label htmlFor="password">Username</label>
      <input type="text" name="username" placeholder="username" onChange={e => this.change(e)} value={this.state.username}/>
      <br></br>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="password" onChange={e => this.change(e)} value={this.state.password}/>
      <br></br>
      <button type="button" className="btn-dark" onClick ={e => this.submit(e)}>
        Login
      </button>
    </div>
    )
  }
}