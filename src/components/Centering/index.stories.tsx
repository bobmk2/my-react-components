import React from 'react';

import { text, object, select } from '@storybook/addon-knobs';
import { Centering } from '../Centering';

export default {
  title: 'Centering',
  components: Centering
};

export const center = () => (
  <div style={{ height: '400px', width: '400px', backgroundColor: '#AFF' }}>
    <Centering>{text('Children', 'Center')}</Centering>
  </div>
);

export const vertical = () => (
  <div style={{ height: '400px', width: '400px', backgroundColor: '#FAF' }}>
    <Centering type='vertical'>{text('Children', 'Vertical')}</Centering>
  </div>
);

export const horizontal = () => (
  <div style={{ height: '400px', width: '400px', backgroundColor: '#FFA' }}>
    <Centering type='horizontal'>{text('Children', 'Horizontal')}</Centering>
  </div>
);

export const withStyle = () => {
  const value = object('Styles', { height: '200px', width: '200px', backgroundColor: '#FAA' });

  return (
    <Centering style={value} type={select('Type', ['center', 'vertical', 'horizontal'], 'center')}>
      <div
        style={{
          display: 'inline-block',
          height: '10px',
          width: '10px',
          backgroundColor: '#060',
          margin: '0 10px 0 10px'
        }}
      />
      <div
        style={{
          display: 'inline-block',
          height: '30px',
          width: '10px',
          backgroundColor: '#090',
          margin: '0 10px 0 10px'
        }}
      />
      <div
        style={{
          display: 'inline-block',
          height: '50px',
          width: '10px',
          backgroundColor: '#0C0',
          margin: '0 10px 0 10px'
        }}
      />
    </Centering>
  );
};
