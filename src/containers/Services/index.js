import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DocumentMeta from 'react-document-meta';

/* actions */
import * as actionCreators from 'actions/app';

/* application components */
import { ServicesPage } from 'components/ServicesPage';

const metaData = {
  title: 'Services',
  description: 'Working to build, better, and unify our tech community.',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'madeinfll, flltech, fort lauderdale tech, flta, florida tech, fort lauderdale tech association, fort lauderdale',
    },
  },
};

@connect(
  state => state.app,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Services extends Component {
  render() {
    return (
      <section>
        <DocumentMeta { ...metaData } />
        <ServicesPage { ...this.props } />
      </section>
    );
  }
}
