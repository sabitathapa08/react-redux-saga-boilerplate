import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import action from '../../utils/actionCreators';
import { createStructuredSelector } from 'reselect';
import {makeSelectGetResponse} from './selector';

export const GET_NEWS_REQUEST= 'App/Home/GET_NEWS_REQUEST';
export const GET_NEWS_SUCCESS = 'App/Home/GET_NEWS_SUCCESS';
export const GET_NEWS_FAILURE = 'App/Home/GET_NEWS_FAILURE';

export const getNewsRequest = action(GET_NEWS_REQUEST);
export const getNewsSuccess = action(GET_NEWS_SUCCESS);
export const getNewsFailure = action(GET_NEWS_FAILURE);

const mapStateToProps = createStructuredSelector({
    data: makeSelectGetResponse()
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