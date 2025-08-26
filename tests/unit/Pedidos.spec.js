import { mount } from "@vue/test-utils";
import Pedidos from "@/views/Pedidos.vue";
import * as network from "@/services/networkServices";

// util legível para aguardar o próximo ciclo do event loop
const delay = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

const mockData = {
  header: {
    number: 4510001114,
    serial: 11223344,
    buyer: "MTP West Buyer",
    price: 20000,
    currency: "USD",
    createdAt: "2020-04-16T15:32:55.382Z",
    status: "Need to confirm",
    contact: {
      name: "Jacksonville Group (Jason Burn)",
      email: "jacksonvillegroup@me.com",
      phone: "903-575-3050",
      fax: "999-575-3050",
    },
  },
  supplier: {
    code: "101908",
    name: "Motion Industries INC.",
    contact: {
      name: "Jack Jeff Ripple Applejack",
      email: "jack_jeff_applejack@motion.com",
    },
  },
  addresses: [
    { label: "Ship to", name: "West Plant" },
    { label: "Bill to", name: "Pilgrims Pride Corp." },
    { label: "Charge to", name: "Lorem Ipsum" },
  ],
};

describe("Pedidos.vue", () => {
  it("renders pedido data after fetch", async () => {
    jest.spyOn(network, "get").mockResolvedValue(mockData);

    const wrapper = mount(Pedidos, {});

    await delay();
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain("MTP West Buyer");
    expect(wrapper.text()).toContain("Motion Industries INC.");
    expect(wrapper.text()).toContain("West Plant");

    network.get.mockRestore();
  });
});
