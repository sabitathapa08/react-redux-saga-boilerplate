import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';

import Routing from './Routing';
import { makeSelectLocation } from './selectors';
import MessagesEN from '../translations/en.json';
import MessagesNE from '../translations/ne.json';

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

const messages = {
  ne: MessagesNE,
  en: MessagesEN,
};
const language = navigator.language.split(/[-_]/)[0]; // language without region code

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: language,
    };
  }

  render() {
    const {
      state: { selected },
      props: { location },
    } = this;
    return (
      <IntlProvider locale={language} messages={messages[selected]}>
        <div>
          <h1>This is React App </h1>
          <Routing location={location} />
        </div>
      </IntlProvider>
    );
  }
}
App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string,
    hash: PropTypes.string,
    key: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(App);
