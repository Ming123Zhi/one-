import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {
    movie_action
}
from '../../action/actionCreator';
import './style/movie.css'
import MovieUI from './children/movieUI'
class Movie extends Component {
    render() {
        let {movieDate} = this.props;
        return (
            <Fragment >
                <MovieUI Movies={movieDate}/>
            </Fragment>
        )
    }
    componentDidMount () {
        this.props.getMovieData ();
    }
}

const mapStateToProps = (state)=>({
    movieDate:state.movie.movieDate
 })
 const mapDispatchToProps =(dispatch)=>({
    getMovieData(){
        dispatch(movie_action());
    }
 })
export default connect(mapStateToProps,mapDispatchToProps)(Movie);