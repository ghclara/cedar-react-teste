import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

import Reservatorio from '../Reservatorio'
import Bomba from '../Bomba'
import Valvula from '../Valvula'

import './styles.css'

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <div style={{ height: "100%" }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={20}
        outsideChevron
      >
        <div style={{ height: '100%', background: '#EEE' }}><Reservatorio/></div>
        <div style={{ height: '100%', background: '#EEE' }}><Bomba/></div>
        <div style={{ height: '100%', background: '#EEE' }}><Valvula/>/</div>
      </ItemsCarousel>
    </div>
  );
};