import React, { Component } from 'react';
import R from 'ramda';

/* images */
const icons = R.range(1, 3 + 1).map(index => require(`./files/about-${index}.png`));

export class ThreeCols extends Component {
  render() {
    return (
      <div className="container">
        <div className="row threeCol">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
            <img src={ icons[0] } />

              <p className="paragraph green">
                Title text here.
              </p>
              <p>
                Authentic tofu trust fund, farm-to-table quis tattooed hoodie enim viral. Trust fund XOXO poutine.<br /><br />
                Kombucha deserunt air plant, offal gentrify mustache poke selvage synth sunt affogato lyft. Tbh eiusmod flexitarian pok pok, edison bulb deep v mollit freegan in gluten-free tote bag. YOLO intelligentsia chambray pour-over, chia photo booth paleo do.
              </p>

          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
            <img src={ icons[1] } />

              <p className="paragraph green">
                Title text here.
              </p>
              <p>
                Authentic tofu trust fund, farm-to-table quis tattooed hoodie enim viral. Trust fund XOXO poutine.<br /><br />
                Kombucha deserunt air plant, offal gentrify mustache poke selvage synth sunt affogato lyft. Tbh eiusmod flexitarian pok pok, edison bulb deep v mollit freegan in gluten-free tote bag. YOLO intelligentsia chambray pour-over, chia photo booth paleo do.
              </p>

          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
            <img src={ icons[2] } />

              <p className="paragraph green">
                Title text here.
              </p>
              <p>
                Authentic tofu trust fund, farm-to-table quis tattooed hoodie enim viral. Trust fund XOXO poutine.<br /><br />
                Kombucha deserunt air plant, offal gentrify mustache poke selvage synth sunt affogato lyft. Tbh eiusmod flexitarian pok pok, edison bulb deep v mollit freegan in gluten-free tote bag. YOLO intelligentsia chambray pour-over, chia photo booth paleo do.
              </p>
              
          </div>
        </div>

      </div>
    );
  }
}
