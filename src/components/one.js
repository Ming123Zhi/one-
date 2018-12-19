import React,{Component} from "react"
import '../css/one.css'
import {Link} from 'react-router-dom'
import {get_data_action} from '../action/actionCreator'
import {connect} from 'react-redux'

class One extends Component{

    render(){
        let {itemList} = this.props
        return(
            <div>
                {
                    itemList.map((item,index)=>{
                        // return  <Link className="item-text" to="/details" key={index}>
                        //             <p>{item.date}</p>
                        //             <p>{item.title}</p>
                        //             <a href="#">
                        //                 <img src={item.img_url}/>
                        //             </a>
                        //             <p>{item.picture_author}</p>
                        //             <p>{item.content}</p>
                        //             <p>{item.text_authors}</p>
                        //         </Link>
                         return <Link to="/details" key={index}><div>{item}</div></Link>
                    })
                }
            </div>
        )
       
    }
    componentDidMount(){
        this.props.getData()
    }
    
}
const mapStateToProps = (state)=>({
    itemList:state.reducer.itemList
 })
 const mapDispatchToProps =(dispatch)=>({
   getData(){
        dispatch(get_data_action())
    }
 })
 export default connect(mapStateToProps,mapDispatchToProps)(One)