import React,{Component} from "react"
import {connect} from 'react-redux'
 class Details extends Component{
    render(){
        let {itemDetail} =this.props
        return(
            <div>
                <div>
                    <img src={itemDetail.img_url} alt="图片"/>
                </div>
                <div>
                    <p>VOL{itemDetail.id}</p>
                    <p>{itemDetail.picture_author}</p>
                </div>
                <p className="day">{itemDetail.day}</p>
                <p className="year">{itemDetail.year}</p>
                <p className="content">{itemDetail.content}</p>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    itemDetail:state.one.itemDetail
 })
 const mapDispatchToProps =(dispatch)=>({
  
 })
 export default connect(mapStateToProps,mapDispatchToProps)(Details)