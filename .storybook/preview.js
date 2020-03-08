import { addDecorator } from '@storybook/react';
import '@storybook/addon-console';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
addDecorator(withInfo);
addDecorator(withKnobs({ escapeHTML: false }));
