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
                        return  <div className="item-box" key={index} onClick={this.props.handleClick.bind(this,index)}> 
                                    <p className="item-date">{item.date}</p>
                                    <p className="item-title">{item.title}</p>
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
    handleClick(index){
        dispatch(one_detail(index))
    }
 })
 export default connect(mapStateToProps,mapDispatchToProps)(One)