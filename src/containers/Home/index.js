import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentMeta from 'react-document-meta';

/* actions */
import * as actionCreators from 'actions/app';

/* application components */
import SmartLoading from 'components/SmartLoading';
import { TopImage } from 'components/TopImage';
import { Subscribe } from 'components/Subscribe';
import { WeWillHelpYouWithMacs } from 'components/WeWillHelpYouWithMacs';

const metaData = {
  title: 'FLTA | Fort Lauderdale Tech Association',
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
export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageLoaded: false,
    };
  }

  componentWillMount() {
    this.setState({
      pageLoaded: true,
    });
  }

  render() {
    const { pageLoaded } = this.state;

    const renderContent = () => {
      return (
          <section>
            <SmartLoading
              animation="fade-in"
              speed={700}
              wait={1700}
            >
              <Subscribe />
            </SmartLoading>
            <WeWillHelpYouWithMacs { ...this.props } />
          </section>
      );
    };

    return (
      <section>
        <DocumentMeta { ...metaData } />
        <TopImage { ...this.props } />
          {
            pageLoaded && renderContent()
          }
      </section>
    );
  }
}
