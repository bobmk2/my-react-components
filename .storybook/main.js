module.exports = {
  stories: ['../src/**/*.stories.(tsx|js)'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
    '@storybook/addon-storysource/register'
  ]
};
