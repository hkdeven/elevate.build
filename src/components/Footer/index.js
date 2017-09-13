import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import { styles } from './styles/styles.scss';

export class Footer extends Component {
  render() {
    return (
      <section className={ `${styles}` }>
        <div className="container">
          <div className="row">
            <div className="col-xs-4 col-sm-3 col-md-2 col-lg-2">
              {/*}<span className="logo" />*/}
              <p className="title">
                FLTA ©
              </p>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-10 col-lg-10">
              <p className="description">
                Working to build, better, and unify our tech community
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
              <div className="social">
                <a href="https://www.facebook.com/FLLtech" className="facebook" />
                <a href="https://twitter.com/fortlauderdaletech" className="twitter" />
                <a href="https://www.linkedin.com/groups/7060596" className="linkedin" />
              </div>
              <p className="copyright">
              Need to contact us? <a href="mailto:info@fortlauderdaletech,org">info@fortlauderdaletech,org</a><br />
                Copyright © Fort Lauderdale Tech Association, Inc
                <br />
                Made with  in sunny South Florida. #madeinFLL #FLLtech
                <br />
                We love open source.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
