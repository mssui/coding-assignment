import { shallowMount } from "@vue/test-utils";
import employee from "@/components/employee.vue";

describe("employee.vue", () => {
  test("Employee Vue instance", () => {
    const wrapper = shallowMount(employee);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("employeeSalary function will be called with button click", () => {
    const wrapper = shallowMount(employee);
    wrapper.vm.employeeSalary = jest.fn();
    const el = wrapper.find(".btn");
    el.trigger("click");
    expect(wrapper.vm.employeeSalary).toBeCalled();
  });
});
