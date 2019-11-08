import React, { Component } from 'react'
import { connect } from 'react-redux'
import ApiService from '../../services/ApiService'
import { getEbayCategoryList, setNextPageToken } from '../../actions/ebayCategoryList-action'
import './EbayCategoryList.scss'
import  EbayProductCategoryAspect from '../EbayProductCategoryAspect/EbayProductCategoryAspect'
import { getEbayProductCategoryAspect, setEbayProductCategoryAspectName } from '../../actions/ebayProductCategoryAspect-action'

class EbayCategoryList extends Component {
    
    apiService = new ApiService() 
    loadMore = async () => { 
        const { nextPageToken, getEbayCategoryList, setNextPageToken } = this.props
        const result = await this.apiService.GetEbayCategoryList(1 ,nextPageToken)
        getEbayCategoryList(result.data.results)
        setNextPageToken(result.data.next)
    }
    onClick = async (id, name) => {
        const { getEbayProductCategoryAspect, setEbayProductCategoryAspectName } = this.props
        const result = await this.apiService.GetEbayProductCategoryAspects(id)
        getEbayProductCategoryAspect(result.data)
        setEbayProductCategoryAspectName(name)        
    }
    
    render() {
        const { ebayCategoryList, ebayProductCategoryAspectName } = this.props
        return (
            <div className='category-list'>
               <ul className="list-group">
                    { ebayCategoryList.map(el => 
                    <li className={el.name === ebayProductCategoryAspectName ? "list-group-item active" : "list-group-item"}
                    onClick={() => this.onClick(el.id, el.name)} key={el.id}>
                        {el.name}
                    </li>)}
                    { ebayCategoryList.length > 0 ? <li className="list-group-item load-more" onClick={this.loadMore}>Load More</li> : null}
                </ul> 
                <EbayProductCategoryAspect />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    ebayCategoryList: state.ebayCategoryList.ebayCategoryList,
    nextPageToken: state.ebayCategoryList.nextPageToken,
    ebayProductCategoryAspectName: state.ebayProductCategoryAspect.ebayProductCategoryAspectName
}) 
export default connect( mapStateToProps, {  getEbayCategoryList, setNextPageToken, getEbayProductCategoryAspect, setEbayProductCategoryAspectName } )(EbayCategoryList)



