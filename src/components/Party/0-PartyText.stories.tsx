import React from 'react';

import * as Party from './index';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Party/Text',
  component: Party.Text
};

export const Example = () => {
  return <Party.Text duration={text('Duration', '1s')}>{text('Children', "Let's party!!")}</Party.Text>;
};
