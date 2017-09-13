import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* application components */
import { AboutPage } from 'components/AboutPage';

const metaData = {
  title: 'About',
  description: 'Working to build, better, and unify our tech community.',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'madeinfll, flltech, fort lauderdale tech, flta, florida tech, fort lauderdale tech association, fort lauderdale',
    },
  },
};

export class About extends Component {
  render() {
    return (
      <section>
        <DocumentMeta { ...metaData } />
        <AboutPage />
      </section>
    );
  }
}
