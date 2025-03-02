import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from '../App';

const container = document.getElementById('root');
const root = createRoot(container);

document.addEventListener('DOMContentLoaded', () => {
  root.render(<Application />);
});
