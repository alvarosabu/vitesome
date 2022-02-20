import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { createI18n } from 'vue-i18n';

import HelloWorld from '/@/components/hello-world/HelloWorld.vue';

describe('HelloWorld', () => {
  it('should render', () => {
    const i18n = createI18n({
      // vue-i18n options here ...
    });

    const wrapper = mount(HelloWorld, {
      global: {
        plugins: [i18n],
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
