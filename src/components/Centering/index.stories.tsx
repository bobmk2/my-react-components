import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, object, select } from '@storybook/addon-knobs';

import { Centering } from '../Centering';

const components = storiesOf('Centering', module);
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('center', () => (
    <div style={{ height: '400px', width: '400px', backgroundColor: '#AFF' }}>
      <Centering>{text('Children', 'Center')}</Centering>
    </div>
  ))
  .add('vertical', () => (
    <div style={{ height: '400px', width: '400px', backgroundColor: '#FAF' }}>
      <Centering type='vertical'>{text('Children', 'Vertical')}</Centering>
    </div>
  ))
  .add('horizontal', () => (
    <div style={{ height: '400px', width: '400px', backgroundColor: '#FFA' }}>
      <Centering type='horizontal'>{text('Children', 'Horizontal')}</Centering>
    </div>
  ))
  .add('with style', () => {
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
  });
