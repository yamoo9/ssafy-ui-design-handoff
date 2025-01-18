class Chip {
  #element;

  constructor(element) {
    this.#element = element;
    if (!this.hasPressedState) {
      this.pressed = false;
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

  set pressed(newState) {
    this.#element.setAttribute('aria-pressed', newState);
  }

  #bind() {
    this.#element.addEventListener('click', (e) => {
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
