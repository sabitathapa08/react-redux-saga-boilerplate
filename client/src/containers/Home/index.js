import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { getNewsRequest } from '../../actions/HomeAction';

import { makeSelectGetResponse } from '../../selectors/HomeSelector';

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
