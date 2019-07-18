import React from "react";
import {Router, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeSelectLocation } from "./selectors";

import HomePage from '../containers/Home';

const mapStateToProps = createStructuredSelector({
    location: makeSelectLocation(),
  });

class Routing extends React.Component{
    static propTypes = {
        location: PropTypes.shape({
          pathname: PropTypes.string.isRequired,
          search: PropTypes.string,
          hash: PropTypes.string,
          key: PropTypes.string
        }).isRequired,
      };

      render() {
          return(
            //   <Router location={this.props.location}>
                <Switch >
                    {/* Route here */}
                    <Route exact path="/" component={HomePage} />
                </Switch>
            //   </Router>
          )
      }
}

export default connect(mapStateToProps)(Routing);