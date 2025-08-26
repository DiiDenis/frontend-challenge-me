<template>
  <div class="page">
    <div class="page_container">
      <img
        class="page_logo"
        src="../assets/images/logo_grande.svg"
        alt="logo"
      />
      <div class="page_title">Bem vindo ao Mercado Eletrônico</div>
      <div class="page_subtitle">
        Aqui você consegue visualizar detalhes do seu pedido
      </div>
      <div class="page_button">
        <BaseButton
          texto="Acessar Pedido"
          tema="primary"
          preenchimento="filled"
          :full="true"
          @click="acessarPedidos"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import BaseButton from "../components/BaseButton.vue";

const router = useRouter();
function acessarPedidos() {
  router.push("/pedidos");
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  background: $primary;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  &_container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $text;
    flex-direction: column;
    padding-top: 150px;
    background: #fff;
    max-width: 569px;
    padding: 50px 20px 50px;
    border-radius: 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
  }

  &_logo {
    width: 180px;
    height: 180px;
  }

  &_title {
    font-size: 24px;
    font-weight: bold;
    margin-top: 16px;
    font-size: 32px;
    font-weight: 700;
    margin-top: 20px;
    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 32px;
    }
  }

  &_subtitle {
    font-size: 16px;
    margin-top: 8px;
  }

  &_button {
    margin-top: 24px;
    width: 250px;
  }
}
</style>
