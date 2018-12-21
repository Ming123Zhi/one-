import React,{Component,Fragment} from "react"
import './style/one.css'
import {Link} from 'react-router-dom'
import {one_action,one_detail} from '../../action/actionCreator'
import {connect} from 'react-redux'

class One extends Component{

    render(){
        let {oneDate} = this.props
        return(
            <Fragment>
                {
                    oneDate.map((item,index)=>{
                        return  <div className="item-box" key={index} onClick={this.props.handleClick.bind(this,item.id)}> 
                                    <p className="item-date">{item.date}</p>
                                    <p className="item-title">VOL.{item.id}</p>
                                    <div className="item-img">
                                        <img src={item.img_url} alt="插画"/>
                                    </div>
                                    <p className="item-pic">{item.picture_author}</p>
                                    <p className="item-con">{item.content}</p>
                                    <p className="item-text">{item.text_authors}</p>
                                </div>
                    })
                }
            </Fragment>
        )
       
    }
    componentDidMount(){
        this.props.getData()
    }
    
}
const mapStateToProps = (state)=>({
    oneDate:state.one.oneDate
 })
 const mapDispatchToProps =(dispatch)=>({
   getData(){
        dispatch(one_action())
    },
    handleClick(id){
        dispatch(one_detail(id))
        this.props.history.push("/details")
    }
 })
 export default connect(mapStateToProps,mapDispatchToProps)(One)