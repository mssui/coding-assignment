import { shallowMount } from "@vue/test-utils";
import mainpage from "@/components/mainpage.vue";

describe("mainpage.vue", () => {
  test("Mainpage is a Vue instance", () => {
    const wrapper = shallowMount(mainpage);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
