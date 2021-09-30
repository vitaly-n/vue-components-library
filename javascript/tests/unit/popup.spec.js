import { mount } from '@vue/test-utils'
import Popup from '@/components/Popup.vue'

describe('Popup.vue', () => {
  it('Renders modal header', () => {
    const wrapper = mount(Popup)
    const header = wrapper.find('.modal-header')
    expect(header.exists()).toBe(true)
  })

  it('Renders modal body', () => {
    const wrapper = mount(Popup)
    const body = wrapper.find('.modal-body')
    expect(body.exists()).toBe(true)
  })
})
