import React,{Component} from 'react';

export default class ArticleUI extends Component {
    render () {
        let {reads} = this.props;
        return (
            <div>
                {
                    reads.map((item,index)=>{
                        return <div className="readCon" 
                                    key={item.content_id}
                                    onClick={this.props.handleClickReadCon.bind(this,item.content_id)}
                                >
                                    <p className="readCon-top">{item.article_title}</p>
                                    <h3 className="readCon-title">{item.title}</h3>
                                    <p className="readCon-author">文／{item.user_name}</p>
                                    <div className="readCon-img">
                                        <img src={item.img_url}/>
                                    </div>
                                    <p className="readCon-text">{item.forward}</p>
                                    <p className="readCon-time">{item.date}</p>
                                </div>
                    })
                }
            
            </div>    
        )
    }
}