import React, { Component } from 'react'
import './App.css';
import Auth from './components/Auth/Auth'
import UserChannels from './components/UserChannels/UserChannels'
import ApiService from './services/ApiService'
import { connect } from 'react-redux'

class App extends Component {
  state = {
    authState: false
  }
  apiService = new ApiService() 
  setAuthState = (authState) => {
    this.setState({
      authState
    })
  }
  async componentDidMount() {
    if(localStorage.access && localStorage.refresh) {
      let verify   
        try {
            verify = await this.apiService.JWTVerifyAndRefresh(localStorage.access, localStorage.refresh)
            this.setAuthState(true)
        } catch{}
    }
  }
  render() {
    return (
      <div className='App'>
        { !this.state.authState ? <Auth setAuthState={this.setAuthState}/> : <UserChannels setAuthState={this.setAuthState}/>}
       
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  userChannels: state.userChannels.userChannels
}) 
export default connect( mapStateToProps )(App)






