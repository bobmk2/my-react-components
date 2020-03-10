import React from 'react';

import { RingStepIndicator } from './RingStepIndicator';
import { text, number } from '@storybook/addon-knobs';

export default {
  title: 'Division 2/RingStepIndicator',
  component: RingStepIndicator
};

export const Example = () => {
  return (
    <RingStepIndicator
      size={number('Size', 100)}
      value={number('Value', 2)}
      max={number('Max', 10)}
      step={number('Step', 1)}
      padAngle={number('Padding Angle', 0.1)}
    ></RingStepIndicator>
  );
};
