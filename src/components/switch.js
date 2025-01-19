class Switch {
  #element;
  #parentElement;
  #switchWrapper;
  #switchElement;

  constructor(element) {
    this.#element = element;
    this.#parentElement = this.#element.parentElement;
    this.label = this.#element.dataset.label;
    this.id = crypto.randomUUID();
    this.#render();
  }

  get isChecked() {
    return this.checked === 'true';
  }

  get checked() {
    return this.#switchElement.getAttribute('aria-checked');
  }

  set checked(newValue) {
    this.#switchElement.setAttribute('aria-checked', newValue);
  }

  onUpdate(callback) {
    this.#updateCallbacks.push(callback);
  }

  #updateCallbacks = [];

  #render() {
    this.#switchWrapper = this.#parseElement();
    this.#switchElement = this.#switchWrapper.querySelector('[role="switch"]');
    this.#parentElement.replaceChild(this.#switchWrapper, this.#element);
    this.#bind();
  }

  #bind() {
    const wraprerElement = this.#switchWrapper;

    const handleToggle = (e) => {
      const { type, code: key } = e;

      if (
        type === 'click' ||
        (type === 'keydown' && (key === 'Enter') | (key === 'Space'))
      ) {
        this.checked = !this.isChecked;
        this.#updateCallbacks.forEach((callback) => callback(this.isChecked));
      }
    };

    wraprerElement.addEventListener('click', handleToggle);
    wraprerElement.addEventListener('keydown', handleToggle);
  }

  #parseElement() {
    const { id, label } = this;

    const tempElement = document.createElement('div');
    tempElement.insertAdjacentHTML(
      'beforeend',
      /* html */ `
      <div role="group" class="switch--wrapper">
        <span id="${id}" class="switch--label">${label}</span>
        <div
          class="switch"
          role="switch"
          tabindex="0"
          aria-checked="false"
          aria-labelledby="${id}"
        >
          <span class="switch--knob" />
        </div>
      </div>
    `
    );

    return tempElement.firstElementChild;
  }
}

export function createSwitch(selector) {
  const switchElements = Array.from(document.querySelectorAll(selector));
  return switchElements.map((element) => new Switch(element));
}
