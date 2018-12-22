import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';

export default class MusicUI extends Component {
    render () {
        let {musics,handleClickid} = this.props;
        return (
            <Fragment>
             
                {
                    musics.map((item,index)=>{
                        return  <Link to="/music/details">
                                <div className="musicCon" key={index} onClick={handleClickid.bind(this,index)}>
                                    <p className="musicCon-tag">- 音乐 -</p>
                                    <h3 className="musicCon-title">{item.title}</h3>
                                    <p className="musicCon-author">文／{item.user_name}</p>
                                    <div className="musicCon-img">
                                        <div className="musicCon-imgwarp">
                                        <img src={item.img_url}/>
                                        </div>
                                        <div className="musicCon-imgplay">
                                            <img src="http://image.wufazhuce.com/music_copyright_1.png" />
                                        </div>     
                                    </div>
                                    <p className="musicCon-text-author">{item.music_name} · {item.audio_author} | {item.audio_album}</p>     
                                    <p className="musicCon-text-short">{item.forward}。</p>
                                    <p className="music-data">{item.date} </p>
                                </div>
                                </Link>
                    })
                }
            </Fragment>
        )
    }
}