class MyCustomElement extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<div>hahaha</div>`;
    }

    // static get observedAttributes() {
    //     return ['data-label'];
    // }
    //
    // attributeChangedCallback(name, oldValue, newValue) {
    //     if (name === 'data-label') {
    //         this.querySelector('p').textContent = newValue || 'Default Label';
    //     }
    // }
}

customElements.define('my-custom-element', MyCustomElement);
