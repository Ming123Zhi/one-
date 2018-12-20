import React,{Component} from "react"
import {connect} from 'react-redux'
class Music extends Component{
    render(){
        return(
            <div className="music">
               music
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    
 })
 const mapDispatchToProps =(dispatch)=>({
  
 })
export default connect(mapStateToProps,mapDispatchToProps)(Music)