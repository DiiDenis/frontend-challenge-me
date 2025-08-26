import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const delay = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

const routes = [
  { path: "/", component: Home },
  { path: "/pedidos", component: { template: "<div/>" } },
];
const router = createRouter({ history: createWebHistory(), routes });

describe("Home.vue", () => {
  it("renders button and navigates to /pedidos when clicked", async () => {
    router.push("/");
    await router.isReady();
    const wrapper = mount(Home, {
      global: {
        plugins: [router],
      },
    });

    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);
    await button.trigger("click");

    await wrapper.vm.$nextTick();
    await delay();
    await router.isReady();
    expect(router.currentRoute.value.path).toBe("/pedidos");
  });
});
