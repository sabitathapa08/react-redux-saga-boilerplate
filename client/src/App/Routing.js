import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectLocation } from '../selectors/AppSelectors';
import HomePage from '../containers/Home/Loadable';
import About from '../containers/About/about';

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

class Routing extends React.PureComponent {
  render() {
    return (
      <Switch>
        {/* Route here */}
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
      </Switch>
    );
  }
}

Routing.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string,
    hash: PropTypes.string,
    key: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(Routing);
