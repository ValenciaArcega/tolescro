class CardSlang extends HTMLElement {

  constructor() {
    super();
    this.card_slang_name;
    this.card_meaning_es;
  }

  static get observedAttributes() {
    return ['slang_name', 'slang_es'];
  } // observed

  attributeChangedCallback(Attr, oldValue, newValue) {
    if (Attr == "slang_name") {
      this.card_slang_name = newValue;
    }
    if (Attr == "slang_es") {
      this.card_meaning_es = newValue;
    }
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="card-slang">
        <h1>${this.card_slang_name}</h1>
        <ul>
          <li>
            <div class="list-header">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="card-icon">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
              </svg>
              <h4>Meaning</h4>
            </div>
            <p>${this.card_meaning_es}</p>
          </li>
        </ul>
      </div>
        `
  }
} // class
window.customElements.define("slang-card", CardSlang);