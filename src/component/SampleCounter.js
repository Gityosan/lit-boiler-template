import { html, css, LitElement } from 'lit'

export class SampleCounter extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: #ff9900;
      }
    `
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number }
    }
  }

  constructor() {
    super()
    this.title = 'Hey there'
    this.counter = 5
  }

  __increment() {
    this.counter += 1
  }

  render() {
    return html`
      <h2>${this.title} ： ${this.counter}</h2>
      <button @click=${this.__increment}>１＋</button>
      <slot />
    `
  }
}
customElements.define('sample-counter', SampleCounter)
