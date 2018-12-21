import React,{Component,Fragment} from 'react';
import MusicUI from './children/musicUI';
import './style/music.css';
import {connect} from 'react-redux';
import {
    music_action
}
from '../../action/actionCreator';
class Music extends Component {

    render() {
        let {musicDate} = this.props;
        return (
            <Fragment>
                <MusicUI musics={musicDate}/>
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
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Music);