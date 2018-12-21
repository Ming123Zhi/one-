import React,{Component} from "react"
import {connect} from 'react-redux'
class Music extends Component{
    render(){
        return(
            <div className="music">
               music
               <p>this is gittest</p>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    
 })
 const mapDispatchToProps =(dispatch)=>({
  
 })
export default connect(mapStateToProps,mapDispatchToProps)(Music)