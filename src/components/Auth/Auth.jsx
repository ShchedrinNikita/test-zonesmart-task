import React, { Component } from 'react'
import ApiService from '../../services/ApiService'

export default class Auth extends Component {
state = {
    email: '',
    password: ''
}
onChangeMail = (e) => {
    this.setState({email: e.target.value})
}
onChangePassword = (e) => {
    this.setState({password: e.target.value})
}
onSubmit = (e) => {
    e.preventDefault()
    const apiService = new ApiService()
    apiService.JWTCreate({
    "email": this.state.email,
    "password": this.state.password
  }).then(r => { 
      if(r.data.access && r.data.refresh) {
          localStorage.setItem('access', r.data.access)
          localStorage.setItem('refresh', r.data.refresh)
          this.props.setAuthState(true)
      } else {
          localStorage.clear()
      }
  })

  
    
}
    render() {
        return (
            <div className='auth'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onChangeMail}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.onChangePassword}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>    
            </div>
        )
    }
}
