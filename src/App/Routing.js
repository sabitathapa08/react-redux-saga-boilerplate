import React from "react";
import Switch from "react-router-dom/Switch";
import Route from "react-router-dom/Route";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

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
              <Switch>
                  {/* Route here */}
                  {/* <Route exact path="/" render={props => (
                    <HomeLayout handleScrollView={this.handleScrollView}>
                        <NewHomePage {...props} />
                    </HomeLayout>
                    )} /> */}
              </Switch>
          )
      }
}

export default Routing;