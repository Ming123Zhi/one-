import React,{Component,Fragment} from 'react';

import {connect} from 'react-redux';
class MusicDetails extends Component {
    render () {
        let {musicDetails} = this.props;
        return (
            <Fragment>
                <div className="mDetailsCon">
                    {/*图  */}
                    <div className="mDetailsCon-img">
                        <div className="mDetailsCon-imgb"></div>
                        <div className="mDetailsCon-imgwarp">
                            <img src="http://image.wufazhuce.com/Fl8W6nY1iRdNizZ9yNyFQ_pjMJC7"/>
                        </div>
                        <div className="mDetailsCon-play">
                            <img src="http://image.wufazhuce.com/music-detail-play.png"/> 
                        </div>
                        <div className="mDetailsCon-logo">
                            <img src="http://image.wufazhuce.com/music_copyright_1.png" />
                        </div>
                    </div>
                    {/* 作者信息 */}
                    {
                        musicDetails.map((item,index)=>{
                            return <div key={index}>
                                        <div className="text-music-info">
                                            <p>{item.music_name}</p>
                                            <p>{item.audio_author}</p>
                                            <p>{item.user_name}</p>
                                        </div>
                                        <div className="text-title">    
                                                {item.forward}    
                                        </div>
                                        <div className="text-simple-author">
                                            文／{item.user_name}   
                                        </div>
                                    </div>
                        })
                    }

                    {/* 内容 */}
                    <div className="text-content">
                        <p>这首歌是送给在天堂上的可爱人儿。在「你们的幸福演唱会」上，穿着天使服的Kay妈给我们讲述了这首歌的故事。</p>
                        <div className="textifo">
                            <p>倘若这绝症让你 太泄气萎衰</p>
                            <p>我愿抱你过最后行程 背上你恐惧</p>
                            <p>为你 平伏情绪</p>
                        </div>
                        <div className="one-gif-box">
                            <img src="http://image.wufazhuce.com/FuZJV_9aUbdfjMfyEcveILhZObqL" />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = (state)=>({
    musicDetails:state.music.musicDetails
})
const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(MusicDetails);