import { html } from 'lit'
import '../component/SampleCounter'

export default {
  title: 'Example/SampleCounter',
  component: 'sample-counter',
  argTypes: {
    title: {
      defaultValue: 'default',
      control: {
        type: 'text'
      }
    },
    counter: {
      defaultValue: 99,
      control: {
        type: 'number'
      }
    }
  }
}
const Template = ({ title, counter }) => {
  return html`<sample-counter
    title=${title}
    counter=${counter}
  ></sample-counter>`
}

export const Default = Template.bind({})

export const sampleA = Template.bind({})
sampleA.args = {
  title: 'sample A',
  counter: -999
}

export const sampleB = Template.bind({})
sampleB.args = {
  title: 'sample B',
  counter: 999
}
