import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Disable } from './Disable';

const components = storiesOf('Disable', module);
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('default', () => (
    <Disable disabled={boolean('Disabled', true)}>
      <a href='https://google.com'>Google</a>
      <p>Sample messages</p>
    </Disable>
  ));
