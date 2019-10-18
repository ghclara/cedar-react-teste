import React, {Component} from 'react';

import GraphicsCarousel from '../GraphicsCarousel';
import Mapa from '../Mapa';

export default class Inicial extends Component {
    render() {
        return (
          <>
            <div id="map">
                <Mapa />
            </div>
            <div id="graphics">
                <GraphicsCarousel />
            </div>
          </>
        )
      }
}
