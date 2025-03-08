import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from '../Application';

const container = document.getElementById('root');
const root = createRoot(container);

document.addEventListener('DOMContentLoaded', () => {
  root.render(<Application />);
});
