import { createSwitch } from '@/components/switch.js';
import { createChip, onlyOneSelectChips } from '@/components/chip.js';

/* -------------------------------------------------------------------------- */
/* Switch Demo                                                                */
/* -------------------------------------------------------------------------- */

const [themeSwitch, fontSizeSwitch] = createSwitch('.switch');

themeSwitch.onUpdate((isChecked) => {
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

fontSizeSwitch.onUpdate((isChecked) => {
  const fontSizeControl = document.querySelector('.font-size-control');
  if (isChecked) {
    fontSizeControl.style.fontSize = '20px';
  } else {
    fontSizeControl.style.removeProperty('font-size');
  }
});

/* -------------------------------------------------------------------------- */
/* Chip Demo                                                                  */
/* -------------------------------------------------------------------------- */

const chips = createChip('.chip-list .chip');
onlyOneSelectChips(chips);
