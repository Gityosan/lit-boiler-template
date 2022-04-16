import { html } from 'lit'
import '../component/flexDiv'

export default {
  title: 'Example/flexDiv',
  component: 'flex-div',
  argTypes: {
    justifyContent: {
      defaultValue: 'center',
      control: {
        type: 'text'
      }
    },
    alignItems: {
      defaultValue: 'center',
      control: {
        type: 'text'
      }
    },
    flexDirection: {
      defaultValue: 'row',
      control: {
        type: 'text'
      }
    },
    flexWrap: {
      defaultValue: 'wrap',
      control: {
        type: 'text'
      }
    },
    height: {
      defaultValue: 99,
      control: {
        type: 'number'
      }
    }
  }
}
const Template = ({
  justifyContent,
  alignItems,
  flexDirection,
  flexWrap,
  height
}) => {
  return html`<flex-div
    justifyContent=${justifyContent}
    alignItems=${alignItems}
    flexDirection=${flexDirection}
    flexWrap=${flexWrap}
    height=${height}
  ></flex-div>`
}

export const Default = Template.bind({})
