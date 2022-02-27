import { html, css, LitElement } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
        margin: 0 auto;
      }
      .button_container {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
      }
      .display {
        font-size: 50px;
        font-feature-ettings: 'tnum';
        font-ariant-numeric: tabular-nums;
      }
      button {
        border: 1px solid black;
        background-color: transparent;
        padding: 16px;
        border-radius: 10px;
        cursor: pointer;
      }
      button:hover {
        background-color: black;
        color: white;
      }
      button:disabled:hover {
        background-color: transparent;
        color: #1010104d;
        cursor: inherit;
      }
    `
  }

  static get properties() {
    return {
      time: { type: Number },
      stopTime: { type: Number },
      timer: { attribute: false }
    }
  }

  constructor() {
    super()
    this.time = 0
    this.timer = null
    this.stopTime = 0
  }

  render() {
    return html`
      <div class="button_container">
        <h1>Stop Watch</h1>
        <p class="display">${(this.time / 1000).toFixed(1)}</p>
        <div class="button">
          <button @click=${this._start} ?disabled=${this.timer}>
            ${this.time ? 'リスタート' : 'スタート'}
          </button>
          <button @click=${this._stop}>ストップ</button>
          <button @click=${this._reset}>リセット</button>
        </div>
      </div>
    `
  }

  _start() {
    if (!this.timer) {
      const startTime = new Date()
      this.timer = setInterval(() => {
        const now = new Date()
        this.time = now - startTime + this.stopTime
      }, 100)
    }
  }
  _stop() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
      this.stopTime = this.time
    }
  }
  _reset() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
      this._start()
    }
    this.time = 0
    this.stopTime = 0
  }
}

window.customElements.define('my-element', MyElement)
