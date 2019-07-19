import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

export const GET_NEWS_REQUEST= 'App/Home/GET_NEWS_REQUEST';
export const GET_NEWS_SUCCESS = 'App/Home/GET_NEWS_SUCCESS';
export const GET_NEWS_FAILURE = 'App/Home/GET_NEWS_FAILURE';

export const getNewsRequest = () => {
    return{
        type: GET_NEWS_REQUEST
    }
};
export const getNewsSuccess = () => {
    return{
        type: GET_NEWS_SUCCESS
    }
}
export const getNewsFailure = () => {
    return{
        type: GET_NEWS_FAILURE
    }
}

const mapStateToProps = (state) => ({
    newData: state.GET_NEWS_SUCCESS
});

const mapDispatchToProps = (dispatch) => ({
    getNewsReq: () => dispatch(getNewsRequest())
});

class Home extends React.Component{

    componentWillMount() {
        this.props.getNewsReq();
    }
    render() {
        return(
            <div>HomePage
                <div><Link to="/about">about</Link></div> 
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);