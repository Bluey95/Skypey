import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const API = 'https://stackoverflowlitev3.herokuapp.com/api/v2/auth/login';
const title = <h3 className="text-center default-text py-3">Welcome Back!!</h3>
const login = <h6 className="text-center py-3 login">Don't have an account? <a href='./signup'>Signup Here</a></h6>

class Login extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: '',
  }
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    if (!event.target.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      event.preventDefault();
      const form = event.target;
      const data = new FormData(form);
      const values = [];
      for (let name of data.keys()) {
        const input = form.elements[name];
        values.push(input.value);
      }
      const p = {
          "username": values[0],
          "password": values[1]
      }

    axios({
      method: 'post',
      url: API,
      headers: {
        'Content-Type': 'application/json'
        },
      data: JSON.stringify(p)
    }).then((response) => {
      this.props.history.push('/')
    }).catch(error => {
      if (error.response) {
        this.setState(
          {
            errorMessage: error.response.data['message'],
          }
        )
        }
      });
  }
  
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit} action="./activate">
        <div className="col-md-6 mb-4 center_div main">
          <div className="card main">
              <div className="card-body">
                  {title}
                  <div className="md-form">
                      <input type="text" id="defaultForm-name" name="username" placeholder="username" className="form-control" required />
                  </div>
                  <div className="md-form">
                      <input type="password" id="defaultForm-pass" name="password" placeholder="password" className="form-control" required/>
                  </div>
                  <div>
                    <p className="text-danger">{this.state.errorMessage}</p>
                  </div>
                  <div className="text-center">
                      <button className="btn submit-button btn-lg waves-effect waves-light">Sign in</button>
                  </div>
                  {login}
              </div>
          </div>
        </div>
      </form>
    );
  }

}

export default Login;