import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { IntlProvider } from "react-intl";

import Routing from "./Routing";
import { makeSelectLocation } from "./selectors";
import messages_en from "../translations/en.json";
import messages_ne from "../translations/ne.json";

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation()
});

const messages = {
  ne: messages_ne,
  en: messages_en
};
const language = navigator.language.split(/[-_]/)[0]; // language without region code

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click me to go next page."
    };
  }

  render() {
    return (
      <IntlProvider locale={language}>
        <div>
          <h1>This is React App </h1>
          <Routing location={this.props.location} />
        </div>
      </IntlProvider>
    );
  }
}

export default connect(mapStateToProps)(App);
