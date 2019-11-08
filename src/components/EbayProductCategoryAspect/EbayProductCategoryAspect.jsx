import React, { Component } from 'react'
import { connect } from 'react-redux'
import './EbayProductCategoryAspect.scss'

class EbayProductCategoryAspect extends Component {
    state = {}
    onChange = (e, name) => {
        this.setState({[name]: e.target.value})
    }
    render() {
        
        const { ebayProductCategoryAspect, ebayProductCategoryAspectName } = this.props
        if ( !ebayProductCategoryAspect) return null
        return (
            <div>
                <div className="category-name">{ebayProductCategoryAspectName}</div>
                { ebayProductCategoryAspect.map(el => 
                    <div className='aspects' key={el.localizedAspectName}>
                        <div className="name">{el.localizedAspectName}:</div>
                        { el.aspectMode === 'SELECTION_ONLY' ?
                            <select className='selectpicker'>{el.aspectValues.map(el => <option key={el}>{el}</option>)}</select> :
                            <input type="text" value={this.state.value} onChange={this.onChange} name={el.localizedAspectName}/>
                        }
                </div>)}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    ebayProductCategoryAspect: state.ebayProductCategoryAspect.ebayProductCategoryAspect,
    ebayProductCategoryAspectName: state.ebayProductCategoryAspect.ebayProductCategoryAspectName
}) 
export default connect( mapStateToProps )(EbayProductCategoryAspect)

