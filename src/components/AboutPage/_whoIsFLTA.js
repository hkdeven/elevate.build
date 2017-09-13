import React, { Component } from 'react';

import alex from './files/alex.png';
import jonathan from './files/jonathan.png';

export class WhoIsFLTA extends Component {
  render() {
    return (
      <section className="whoIsFLTA">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <h2 className="green">
                Who is Fort Lauderdale Tech Association?
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-10 col-sm-10 col-md-8 col-lg-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-2 col-lg-offset-2 text-center">
              <p className="paragraphs">
                Kombucha deserunt air plant, offal gentrify mustache poke selvage synth sunt affogato lyft. Tbh eiusmod flexitarian pok pok, edison bulb deep v mollit freegan in gluten-free tote bag. YOLO intelligentsia chambray pour-over, chia photo booth paleo do.
              </p>
            </div>
          </div>
          <div className="col-xs-8 col-sm-8 col-md-3 col-lg-3 col-xs-offset-2 col-sm-offset-2 col-md-offset-3 col-lg-offset-3 text-center">
            {/* <img src={ alex } /> */}
            <p className="name">
              John Smith
            </p>
            <p className="position">
              co-founder
            </p>
            <p className="sign">
              Real Estate Sales Pro.<br />
              Campaign Genius.
            </p>
          </div>
          <div className="col-xs-8 col-sm-8 col-md-3 col-lg-3 col-xs-offset-2 col-sm-offset-2 col-md-offset-0 col-lg-offset-0 text-center">
            {/* <img src={ jonathan } /> */}
            <p className="name">
              John Smith
            </p>
            <p className="position">
              co-founder
            </p>
            <p className="sign">
              Housing Policy Guru.<br />
              Recovering Engineer.
            </p>
          </div>
          <div className="row">
            <div className="col-xs-10 col-sm-10 col-md-8 col-lg-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-2 col-lg-offset-2 text-center">
            <p className="paragraphs">
              Authentic tofu trust fund, farm-to-table quis tattooed hoodie enim viral. Trust fund XOXO poutine small batch next level tote bag. Tofu neutra iPhone gentrify ut, DIY distillery odio vero nisi pinterest artisan proident asymmetrical shabby chic. Live-edge hella beard, you probably haven't heard of them wayfarers retro esse dolor affogato crucifix raw denim. Kombucha deserunt air plant, offal gentrify mustache poke selvage synth sunt affogato lyft. Tbh eiusmod flexitarian pok pok, edison bulb deep v mollit freegan in gluten-free tote bag. YOLO intelligentsia chambray pour-over, chia photo booth paleo do.
            </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
