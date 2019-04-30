import { shallowMount } from "@vue/test-utils";
import employer from "@/components/employer.vue";

describe("employer.vue", () => {
  test("Employeris a Vue instance", () => {
    const wrapper = shallowMount(employer);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("employerSalary function will be called with button click", () => {
    const wrapper = shallowMount(employer);
    wrapper.vm.employerSalary = jest.fn();
    const el = wrapper.find(".btn");
    el.trigger("click");
    expect(wrapper.vm.employerSalary).toBeCalled();
  });
});
