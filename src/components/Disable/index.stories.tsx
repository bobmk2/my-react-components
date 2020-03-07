import React from 'react';

import { Disable } from './Disable';
import { boolean } from '@storybook/addon-knobs';

export default {
  title: 'Disable',
  component: Disable
};

export const example = () => {
  return (
    <Disable disabled={boolean('Disabled', true)}>
      <a href='https://google.com'>Google</a>
      <p>Sample messages</p>
    </Disable>
  );
};
