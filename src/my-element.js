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
        color: #444;
        display: block;
        padding: 16px;
        max-width: 800px;
        margin: 0 auto;
        border-radius: 2%;
        background: #ffffff;
        box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
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
        border: none;
        color: #444;
        background-color: #efefef;
        box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7),
          -6px -6px 10px rgba(255, 255, 255, 0.5),
          6px 6px 8px rgba(255, 255, 255, 0.075),
          6px 6px 10px rgba(0, 0, 0, 0.15);
        padding: 16px;
        border-radius: 10px;
        cursor: pointer;
      }
      button:hover {
        box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6),
          -2px -2px 4px rgba(255, 255, 255, 0.4),
          2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);
      }
      button:active {
        box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.7),
          inset -2px -2px 4px rgba(255, 255, 255, 0.5),
          inset 2px 2px 2px rgba(255, 255, 255, 0.075),
          inset 2px 2px 4px rgba(0, 0, 0, 0.15);
      }
      button:disabled {
        background-color: #fff;
        color: #fff;
        cursor: inherit;
        box-shadow: none;
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
