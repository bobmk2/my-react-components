import React from 'react';

import * as Party from './index';
import { text, select, object } from '@storybook/addon-knobs';

export default {
  title: 'Party/Blend',
  component: Party.Blend
};

export const Example = () => {
  const duration = text('Duration', '1s');
  const mode = select(
    'Blend mode',
    [
      'normal',
      'multiply',
      'screen',
      'overlay',
      'darken',
      'lighten',
      'color-dodge',
      'color-burn',
      'hard-light',
      'soft-light',
      'difference',
      'exclusion',
      'hue',
      'saturation',
      'color',
      'luminosity',
      'initial',
      'inherit',
      'unset'
    ],
    'overlay'
  );
  return (
    <Party.Blend duration={duration} mode={mode}>
      {text('Children', "Let's party!!")}
    </Party.Blend>
  );
};

export const Image = () => {
  const duration = text('Duration', '1s');
  const mode = select(
    'Blend mode',
    [
      'normal',
      'multiply',
      'screen',
      'overlay',
      'darken',
      'lighten',
      'color-dodge',
      'color-burn',
      'hard-light',
      'soft-light',
      'difference',
      'exclusion',
      'hue',
      'saturation',
      'color',
      'luminosity',
      'initial',
      'inherit',
      'unset'
    ],
    'overlay'
  );
  return (
    <Party.Blend duration={duration} mode={mode}>
      <img
        alt='letsparty'
        src={
          'data:image/png;base64,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'
        }
      />
    </Party.Blend>
  );
};

export const withStyle = () => {
  const duration = text('Duration', '1s');
  const mode = select(
    'Blend mode',
    [
      'normal',
      'multiply',
      'screen',
      'overlay',
      'darken',
      'lighten',
      'color-dodge',
      'color-burn',
      'hard-light',
      'soft-light',
      'difference',
      'exclusion',
      'hue',
      'saturation',
      'color',
      'luminosity',
      'initial',
      'inherit',
      'unset'
    ],
    'overlay'
  );
  return (
    <Party.Blend style={object('Style', { padding: '1em', color: '#FFF' })} duration={duration} mode={mode}>
      Let's party!!
    </Party.Blend>
  );
};
