import React,{Component} from "react"
import {connect} from 'react-redux'
class Article extends Component{
    render(){
        return(
            <div className="article">
               article
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    
 })
 const mapDispatchToProps =(dispatch)=>({
  
 })
export default connect(mapStateToProps,mapDispatchToProps)(Article)