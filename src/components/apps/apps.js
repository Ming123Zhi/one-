import React,{Component} from "react"

import {connect} from 'react-redux'
class Apps extends Component{
    render(){
        return(
            <div className="apps">
               apps
               测试音乐上传
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    
 })
 const mapDispatchToProps =(dispatch)=>({
  
 })
export default connect(mapStateToProps,mapDispatchToProps)(Apps)