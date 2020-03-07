import React from 'react';

import { text, number, object } from '@storybook/addon-knobs';
import { Nameplate } from './Nameplate';

export default {
  title: 'Nameplate',
  component: Nameplate
};

export const example = () => {
  const seed = number('Seed', 12345);
  return (
    <>
      <Nameplate seed={seed}>{text('Children1', 'Alice')}</Nameplate>
      <Nameplate seed={seed}>{text('Children2', 'Bob')}</Nameplate>
      <Nameplate seed={seed}>{text('Children3', 'Carol')}</Nameplate>
    </>
  );
};

export const sizes = () => {
  const seed = number('Seed', 12345);
  const children = text('Children', 'Alice');
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Nameplate seed={seed} size='xs'>
        {children}
      </Nameplate>
      <Nameplate seed={seed} size='sm'>
        {children}
      </Nameplate>
      <Nameplate seed={seed} size='md'>
        {children}
      </Nameplate>
      <Nameplate seed={seed} size='lg'>
        {children}
      </Nameplate>
      <Nameplate seed={seed} size='xl'>
        {children}
      </Nameplate>
    </div>
  );
};

export const syncColor = () => {
  const seed = number('Seed', 12345);
  const value = text('Value', 'TeamName1');
  return (
    <>
      <Nameplate seed={seed} value={value}>
        {text('Children1', 'Alice')}
      </Nameplate>
      <Nameplate seed={seed} value={value}>
        {text('Children2', 'Bob')}
      </Nameplate>
      <Nameplate seed={seed} value={value}>
        {text('Children3', 'Carol')}
      </Nameplate>
    </>
  );
};

export const withStyle = () => (
  <Nameplate seed={number('Seed', 12345)} style={object('Style', { color: '#AAF', border: '2px solid #333' })}>
    Alice
  </Nameplate>
);
