import React, { Component } from 'react';

/* components */
import { IntroImage } from '../IntroImage';
import { ThreeCols } from './_threeCols';
import { WhoIsFLTA } from './_whoIsFLTA';

/* component styles */
import { styles } from './styles/styles.scss';

export class AboutPage extends Component {
  render() {
    const intro = {
      title: 'What is the Fort Lauderdale Tech Association?',
      text: 'Our mission is to provide a welcoming and supportive platform for the local tech community to meet and collaborate, create and find incubators for technology startups, and accelerate the growth and quality of Broward County’s tech industry on an international level.',
      image: 'about',
    };

    return (
      <section className={ `${styles}` }>
        <IntroImage { ...intro } />
        <ThreeCols />
        <WhoIsFLTA />
      </section>
    );
  }
}
