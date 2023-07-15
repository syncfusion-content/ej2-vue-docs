import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App component', () => {

  it('Snapshot testing', () => {
    const wrapper = shallowMount(App);
    expect(wrapper).toMatchSnapshot();
  });
})