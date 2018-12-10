import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const API = 'https://stackoverflowlitev3.herokuapp.com/api/v2/auth/registration';
const title = <h3 className="text-center default-text py-3">Create An Account</h3>
const login = <h6 className="text-center py-3 login">Already have an account? <a href='./signup'>Login Here</a></h6>
const loginWith = <h6 className="text-center py-3 login">Or login with</h6>

class Signup extends Component {
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
      console.log("getting here")
      const p = {
          "username": values[0],
          "email": values[1],
          "password": values[2],
          "confirmpass": values[3]
      }

      console.log(JSON.stringify(p))


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
                      <input type="email" id="defaultForm-email" name="email" placeholder="email" className="form-control" required/>
                  </div>
                  <div className="md-form">
                      <input type="password" id="defaultForm-pass" name="password" placeholder="password" className="form-control" required/>
                  </div>
                  <div className="md-form">
                      <input type="password" id="defaultForm-confirmpass" name="confirmpass" placeholder="password" className="form-control" required/>
                  </div>
                  <div>
                    <p className="text-danger">{this.state.errorMessage}</p>
                  </div>
                  <div className="text-center">
                      <button className="btn submit-button btn-lg waves-effect waves-light">Signup</button>
                  </div>
                  {login}

                  <br></br>
                  {loginWith}
                  <div className="row center_icon_div">
                  <div className="col-md-3 mb-4 icon">
                  <a href='./signup'><i className="fa fa-google-plus fa-3x" aria-hidden="true"></i></a>
                  </div>
                  <div className="col-md-3 mb-4 icon">
                  <a href='./signup'><i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
                  </div>
                  <div className="col-md-3 mb-4 icon">
                  <a href='./signup'><i className="fa fa-facebook fa-3x" aria-hidden="true"></i></a>
                  </div>
                  <div className="col-md-3 mb-4 icon">
                  <a href='./signup'><i className="fa fa-twitter fa-3x" aria-hidden="true"></i></a>
                  </div>
                  </div>
                 
              </div>
          </div>
        </div>
      </form>
    );
  }

}

export default Signup;