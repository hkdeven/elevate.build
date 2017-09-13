import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DocumentMeta from 'react-document-meta';

/* actions */
import * as actionCreators from 'actions/app';

/* application components */
import { OpportunityPage } from 'components/OpportunityPage';

const metaData = {
  title: 'Opportunitys',
  description: 'Working to build, better, and unify our tech community.',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'landed, smarter, ownership',
    },
  },
};

@connect(
  state => state.app,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Opportunities extends Component {
  render() {
    return (
      <section>
        <DocumentMeta { ...metaData } />
        <OpportunityPage { ...this.props } />
      </section>
    );
  }
}
