import React from 'react';
import type { Preview } from '@storybook/react'

import "../app/javascript/packs/application.scss"
import "../stories/assets/stories.css"

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'compass',
        // Array of plain string values or MenuItem shape (see below)
        items: ['rosula', 'silva', 'sanguis'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'rosula',
  },
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [ // TODO: add class rosarium-page-backround para que sea el color que yo quiero con el tema
    (Story, context) => (<div className={`rosarium-theme--${context.globals.theme} rosarium-container`}><Story /></div>)
  ],
};

export default preview;