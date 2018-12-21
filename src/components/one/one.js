import React,{Component,Fragment} from "react"
import './style/one.css'
import {one_action,one_detail} from '../../action/actionCreator'
import {connect} from 'react-redux'
import OneUI from './children/oneUI'
class One extends Component{

    render(){
        let {oneDate,handleClick} = this.props
        return(
            <Fragment>
                <div className="section">
                    <OneUI oneDate = {oneDate} handleClick={handleClick.bind(this)}/>
                </div>               
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