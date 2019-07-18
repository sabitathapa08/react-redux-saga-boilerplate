import React, {Component} from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import Routing from './Routing';
import { makeSelectLocation } from "./selectors";

const mapStateToProps = createStructuredSelector({
    location: makeSelectLocation(),
  });

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            message: 'Click me to go next page.'
        }
    };

    render() {
        return(
            <div>
                <h1>This is React App </h1>
                <Routing location={this.props.location}/>
            </div>
        )
    }
};

export default connect(mapStateToProps)(App);