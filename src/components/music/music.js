import React,{Component,Fragment} from 'react';
import MusicUI from './children/musicUI';
import './style/music.css';
import {connect} from 'react-redux';
import {
    music_action,
    musicDetails_action
}
from '../../action/actionCreator';
class Music extends Component {

    render() {
        let {musicDate,handleClickid} = this.props;
        return (
            <Fragment>
                <MusicUI musics={musicDate} handleClickid={handleClickid.bind(this)}/>
            </Fragment>
        )
    }
    componentDidMount () {
        this.props.getMusicData ();
    }
}
const mapStateToProps = (state) => ({
    musicDate:state.music.musicDate
})
const mapDispatchToProps = (dispatch) => ({
    getMusicData(){
        dispatch(music_action());
    },
    handleClickid (id) {
        dispatch(musicDetails_action(id));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Music);