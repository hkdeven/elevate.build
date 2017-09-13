import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* application components */
import { Quiz } from 'components/Quiz';

/* component styles */
import { styles } from './styles/styles.scss';

const metaData = {
  title: 'Quiz',
  description: 'Working to build, better, and unify our tech community.',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'madeinfll, flltech, fort lauderdale tech, flta, florida tech, fort lauderdale tech association, fort lauderdale',
    },
  },
};

export class QuizContainer extends Component {
  render() {
    return (
      <section className={ `${styles}` }>
        <DocumentMeta { ...metaData } />
        <div className="header-green-layer" />
        <Quiz />
      </section>
    );
  }
}
