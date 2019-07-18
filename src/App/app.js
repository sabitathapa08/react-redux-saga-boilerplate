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
            message: 'message'
        }
    };

    render() {
        console.log('location', this.props.location)
        return(
            <div>
                Hello World, This is React App {this.state.message}
                {/* <Routing location={this.props.location}/> */}
            </div>
        )
    }
};

export default connect(mapStateToProps)(App);