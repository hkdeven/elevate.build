import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import { styles } from './styles/styles.scss';

const QuestionsAndAnswers = [{
  question: "How do I sell or move if I don’t own the whole home?",
  answer: "n a typical agreement, you agree to hold the property for at least five years. If you need to relocate before then, you have two options: </br>1) you can sublease the property until the end of the term or </br>2) you can buy-out your investors and sell the entire property. </br>In the case of the second option, you’ll pay a 2% penalty for early termination. <br /><br /> Otherwise, you can sell the property exactly as you would your own home and pay your co-investors 75% of the proceeds. We can help you sell just your share of the home to another Fort Lauderdale Tech Association occupant so you walk away with more money in your pocket. You can also choose to buy out your investors without any penalty as soon as the five years are up.",
}, {
  question: "Companies fail all the time.  What happens if Fort Lauderdale Tech Association goes bankrupt or gets acquired?",
  answer: "With Fort Lauderdale Tech Association, you own the property (your name is on title!) -- we just help coordinate the interactions between all the parties. In the unlikely event that we cease to exist, you'll still own your share of the house, the contract with your co-investors will still be valid and there are contingency plans in place to ensure your investment is protected.",
}, {
  question: "Is this really like owning a home?  How is this different?",
  answer: "With Fort Lauderdale Tech Association, you’re sharing your home investment, not your home experience.  You can paint the walls, fix up the kitchen, build a new deck, AirBnB, sublet or get a puppy; we’re just an alternative financing choice.<br />The only thing that will require approval is major structural changes to the property.  If you want to tear down some walls or build an extension, we just want to partner with you to make sure it’s adding value to the property.",
}, {
  question: "Does rent change year to year?  How do you set the buy-out price?",
  answer: "Typically, rent changes annually based on an independent public rent index. For buy-out prices, we’ll use a local Case-Shiller property index to track the changing value of your home. That way, changes you make inside the home won’t result in higher rent or buy-out prices. Our role is to make it valuations clear, transparent and fair so that you can don’t have to ruin your most important relationships over differences in opinion.",
}];

export class FAQ extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
    };
  }

  render() {
    const { currentQuestion } = this.state;

    return (
      <section className={ `${styles}` }>
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2 className="green">
                Cold hard facts
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <ul className="questions">
                {
                  QuestionsAndAnswers.map(({ question }, key) =>
                  <li key={ key }>
                    <span
                      className={ currentQuestion === key && 'active' }
                      onClick={ () => { this.setState({ currentQuestion: key }); } }>
                      <span dangerouslySetInnerHTML={{ __html: question }} />
                      <div className="answer-mobile hidden-md hidden-lg"
                           dangerouslySetInnerHTML={{ __html: QuestionsAndAnswers[key].answer }}>
                    </div>
                    </span>
                  </li>)
                }
              </ul>
            </div>
            <div className="col-md-1 col-lg-1 hidden-xs hidden-sm">
              <span className={ `arrow arrow-${ currentQuestion }` } />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 hidden-xs hidden-sm">
              <ul className="answers">
                {
                  QuestionsAndAnswers.map(({ answer }, key) =>
                  <li
                    className={ currentQuestion === key && 'active' }
                    key={ key }>
                    <span dangerouslySetInnerHTML={{ __html: answer }} />
                    <br /><br />
                    <a href="http://Fort Lauderdale Tech Association.zendesk.com" target="_blank">
                      See complete F.A.Q.
                    </a>
                  </li>)
                }
              </ul>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
