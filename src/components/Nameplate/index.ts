import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { NameplateBadge } from './NameplateBadge';

const components = storiesOf('NameplateBadge', module);
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('default', () => <NameplateBadge>Test</NameplateBadge>);
