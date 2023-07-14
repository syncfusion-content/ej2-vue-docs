import { shallowMount } from '@vue/test-utils'
import App from '@/app.vue'

describe('App component', () => {
  it('Length of the record', () => {
    const wrapper = shallowMount(App);
    var gridElement = wrapper.find('#Grid');
    const gridInstance = gridElement.vm;
    expect(gridInstance.$props.dataSource).toHaveLength(5);
  })
})
