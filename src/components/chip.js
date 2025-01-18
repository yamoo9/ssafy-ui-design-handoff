class Chip {
  #element;

  constructor(element) {
    this.#element = element;
    
    if (!this.hasPressedState) {
      this.pressed = false;
    }

    if (this.isPressed) {
      this.disabled = true;
    }

    this.#bind();
  }

  get isPressed() {
    return this.pressed === 'true';
  }

  get hasPressedState() {
    return this.#element.hasAttribute('aria-pressed');
  }

  get pressed() {
    return this.#element.getAttribute('aria-pressed');
  }

  get isDisabled() {
    return this.disabled === 'true';
  }

  get disabled() {
    return this.#element.getAttribute('aria-disabled');
  }

  set disabled(newState) {
    this.#element.setAttribute('aria-disabled', newState);
  }

  set pressed(newState) {
    this.#element.setAttribute('aria-pressed', newState);
    if (this.isPressed) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }

  #bind() {
    this.#element.addEventListener('click', (e) => {
      if (this.isDisabled) return;
      this.toggleState();
      this.#updateCallbacks.forEach((callback) => callback(this.isPressed));
    });
  }

  #updateCallbacks = [];

  onUpdate(callback) {
    this.#updateCallbacks.push(callback);
  }

  toggleState() {
    if (this.isPressed) {
      this.pressed = false;
    } else {
      this.pressed = true;
    }
  }
}

export function createChip(selector) {
  const chipElements = Array.from(document.querySelectorAll('.chip'));
  return chipElements.map((element) => new Chip(element));
}
