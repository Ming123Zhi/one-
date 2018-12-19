import React,{Component} from "react"
import '../css/aboutus.css'
import AboutUI from './aboutUI'
import {connect} from 'react-redux'
class AboutUs extends Component{
    render(){
        return(
            <div className="about">
               <AboutUI/>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    
 })
 const mapDispatchToProps =(dispatch)=>({
  
 })
export default connect(mapStateToProps,mapDispatchToProps)(AboutUs)