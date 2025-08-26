<template>
  <div class="page">
    <div class="page_container">
      <div class="page_title">Order details</div>
      <div class="page_header">
        <div class="page_header-highlight">
          <span class="page_header-highlight-label">Pre-order</span>
          <span class="page_header-highlight-number">
            {{ pedido?.header?.number }}
          </span>
          <span class="page_header-highlight-serial">
            {{ pedido?.header?.serial }}
          </span>
        </div>
        <div class="page_header-content">
          <div class="page_header-left">
            <span class="page_header-left-destaque">{{
              pedido?.header?.buyer
            }}</span>
            <span class="page_header-left-texto">
              {{ pedido?.header?.contact?.name }}
            </span>
            <div class="page_header-left-group">
              <span class="page_header-left-texto">
                {{ pedido?.header?.contact?.email }}
              </span>
              <span class="page_header-left-texto">
                {{ pedido?.header?.contact?.phone }}
              </span>
              <span class="page_header-left-texto">{{
                pedido?.header?.contact?.fax
              }}</span>
            </div>
          </div>
          <div class="page_header-right">
            <span class="page_header-right-valor"
              >{{ pedido?.header?.currency }} {{ pedido?.header?.price }}</span
            >
            <span class="page_header-right-status">
              {{ pedido?.header?.status }}
            </span>
            <span class="page_header-right-create">
              {{ pedido?.header?.createdAt }}
            </span>
          </div>
        </div>
      </div>
      <div v-if="loading">Carregando...</div>

      <div v-else>
        <Card :dados="{ ...pedido?.supplier, label: 'Supplier' }" />
        <div class="page_accordion">
          <div class="page_accordion-header" @click="handleClick">
            <img
              :class="[
                'page_accordion-icon',
                { 'page_accordion-icon--rotate': isOpen },
              ]"
              src="../assets/images/seta_up.png"
              alt="logo"
            />
            <span class="page_accordion-title">Addresses</span>
          </div>
        </div>
        <div
          :class="[
            'page_accordion-content',
            { 'page_accordion-content--open': isOpen },
          ]"
        >
          <Card :dados="pedido?.addresses[0]" />
          <Card :dados="pedido?.addresses[1]" />
          <Card :dados="pedido?.addresses[2]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { get } from "../services/networkServices.js";
import Card from "../components/Card.vue";

const pedido = ref(null);
const loading = ref(true);
const isOpen = ref(false);
const handleClick = () => {
  isOpen.value = !isOpen.value;
};

const dadosPedido = async () => {
  try {
    const response = await get("/orders/1");
    return { success: true, data: response };
  } catch (err) {
    return { success: false, error: err };
  }
};

onMounted(async () => {
  loading.value = true;
  const result = await dadosPedido();
  if (result.success) {
    pedido.value = result.data;
  }
  loading.value = false;
});
</script>

<style lang="scss" scoped>
.page {
  color: #000;
  min-width: 100%;
  min-height: 100%;
  text-align: left;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }

  &_container {
    width: calc(100% - 30px);
    height: calc(100% - 30px);
  }
  &_title {
    font-size: 24px;
    font-weight: bold;
    color: $text;
  }
  &_header {
    display: flex;
    height: 110px;
    width: 100%;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      height: auto;
    }

    &-highlight {
      background: #1052e0;
      width: 200px;
      color: $light;
      height: 100px;
      padding: 15px;
      border-radius: 0 8px 8px 0;
      display: flex;
      flex-direction: column;
      @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 1rem;
      }
      &-label {
        font-size: 18px;
        line-height: 24px;
      }
      &-number {
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
      }
      &-serial {
        font-size: 12px;
      }
    }
    &-content {
      flex: 1;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      @media (max-width: 768px) {
        gap: 1rem;
      }
    }
    &-left {
      flex: 1;
      padding: 0 15px;
      display: flex;
      flex-direction: column;
      @media (max-width: 450px) {
        width: 100%;
        padding: 0;
      }
      &-destaque {
        font-weight: 600;
        font-size: 28px;
      }
      &-texto {
        line-height: 16px;
        font-size: 12px;
        @media (max-width: 768px) {
          min-width: 145px;
        }
      }
      &-group {
        display: flex;
        gap: 1rem;
        margin-top: 6px;
        flex-wrap: wrap;
      }
    }
    &-right {
      padding: 15px;
      display: flex;
      flex-direction: column;
      text-align: right;
      min-width: 210px;
      @media (max-width: 768px) {
        text-align: left;
        padding: 0;
      }

      &-valor {
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
      }
      &-status {
        font-size: 20px;
        line-height: 28px;
        font-weight: 600;
        color: $success;
      }
      &-create {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
  &_accordion {
    &-header {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
    }

    &-content {
      display: none;
      @media (min-width: 768px) {
        padding: 12px 16px;
      }

      &--open {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }
    }
    &-icon {
      width: 16px;
      height: 16px;
      &--rotate {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
