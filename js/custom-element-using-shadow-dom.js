class MyCustomElementUsingShadowDOM extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        // this.attachShadow({ mode: 'closed' });
        this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            padding: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            background-color: #f9f9f9;
          }
          
          :host(.theme) {
            background-color: pink;          
          }
          
          div {
            background-color: #aaa;
          }
        </style>
        <div>
          <p>${this.getAttribute('data-label') || 'Default Label'}</p>
          <slot></slot>
        </div>
      `;
    }

    static get observedAttributes() {
        return ['data-label', 'data-color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'data-label':
                this.shadowRoot.querySelector('p').textContent = newValue || 'Default Label';
                break;

            case 'data-color':
                this.shadowRoot.querySelector('p').style.color = newValue || '#000';
                break;
        }
    }
}

customElements.define('my-custom-element-using-shadow-dom', MyCustomElementUsingShadowDOM);
