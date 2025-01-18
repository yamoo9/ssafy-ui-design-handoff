import './styles/main.css';
import { createSwitch } from './components/switch.js';

const [firstSwitch] = createSwitch('.switch');

firstSwitch.onUpdate((isChecked) => {
  const { body } = document;
  if (isChecked) {
    body.style.cssText = `
      color: #fefefe;
      background-color: #1e1e1e;
    `;
  } else {
    body.style.cssText = `
      background-color: #fefefe;
      color: #1e1e1e;
    `;
  }
});
