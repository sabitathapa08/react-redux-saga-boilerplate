import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import action from '../../utils/actionCreators';
import { makeSelectGetResponse } from './selector';

export const GET_NEWS_REQUEST = 'App/Home/GET_NEWS_REQUEST';
export const GET_NEWS_SUCCESS = 'App/Home/GET_NEWS_SUCCESS';
export const GET_NEWS_FAILURE = 'App/Home/GET_NEWS_FAILURE';

export const getNewsRequest = action(GET_NEWS_REQUEST);
export const getNewsSuccess = action(GET_NEWS_SUCCESS);
export const getNewsFailure = action(GET_NEWS_FAILURE);

const mapStateToProps = createStructuredSelector({
  data: makeSelectGetResponse(),
});

const mapDispatchToProps = dispatch => ({
  getNewsReq: () => dispatch(getNewsRequest()),
});

class Home extends React.Component {
  componentWillMount() {
    const { getNewsReq } = this.props;
    getNewsReq();
  }

  render() {
    return (
      <div>
        HomePage
        <div>
          <Link to="/about">about</Link>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  getNewsReq: PropTypes.func,
};
Home.defaultProps = {
  getNewsReq: {},
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
