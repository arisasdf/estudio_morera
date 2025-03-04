import type { Preview } from '@storybook/react'

import "../app/javascript/packs/application.scss"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;