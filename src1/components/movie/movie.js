import React,{Component} from "react"
import {connect} from 'react-redux'
class Movie extends Component{
    render(){
        return(
            <div className="movie">
               movie
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    
 })
 const mapDispatchToProps =(dispatch)=>({
  
 })
export default connect(mapStateToProps,mapDispatchToProps)(Movie)