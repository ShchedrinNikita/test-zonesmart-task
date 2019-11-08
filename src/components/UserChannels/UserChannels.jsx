import React, { Component } from 'react'
import ApiService from '../../services/ApiService'
import EbayCategoryList from '../EbayCategoryList/EbayCategoryList'
import Select from 'react-select'
import { connect } from 'react-redux'
import { getUserChannels } from '../../actions/userChanel-action'
import { getEbayCategoryList, setNextPageToken } from '../../actions/ebayCategoryList-action'


class UserChannels extends Component {
    state = {
        currentChannel: null
    }
    apiService = new ApiService() 
    async componentDidMount() {  
        let verify   
        try {
            verify = await this.apiService.JWTVerifyAndRefresh(localStorage.access, localStorage.refresh)
            this.props.setAuthState(true)
        } catch{
            this.props.setAuthState(false)
        }
        
        await this.apiService.GetUserChannels().then(r => r.data.results.forEach(el => {
            const { getUserChannels } = this.props
            var result = []
            result.push({label: el.name, value: el})
            getUserChannels(result)
        }))
    }
    async componentDidUpdate(prevProps, prevState) {
        const { getEbayCategoryList, setNextPageToken } = this.props
        if(this.state.currentChannel !== prevState.currentChannel && this.state.currentChannel) {
            const result = await this.apiService.GetEbayCategoryList(this.state.currentChannel.id)
            getEbayCategoryList(result.data.results)
            setNextPageToken(result.data.next)
        }
    }
    onChange = (value) => {
        this.setState({
            currentChannel: value
        })
    }
    render() {
        const { userChannels } = this.props
        return (
            <div>
                <div className="hello">Hi!</div>
                { userChannels ? <Select options={userChannels} onChange={this.onChange}/> : null}
                <EbayCategoryList/>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    userChannels: state.userChannels.userChannels
}) 
export default connect( mapStateToProps, { getUserChannels, getEbayCategoryList, setNextPageToken })(UserChannels)


