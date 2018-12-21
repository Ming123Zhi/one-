import React,{Component} from "react"
import {connect} from 'react-redux'
import '../style/detail.css'
 class Details extends Component{
    render(){
        let {itemDetail} =this.props
        return(
            <div>
                <div className="picture">
                    <img src={itemDetail.img_url} alt="图片"/>
                </div>
                <div className="infor">
                    <p>VOL{itemDetail.id}</p>
                    <p>{itemDetail.picture_author}</p>
                </div>
                <p className="day">{itemDetail.day}</p>
                <p className="year">{itemDetail.year}</p>
                <div className="separate-line"></div>
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