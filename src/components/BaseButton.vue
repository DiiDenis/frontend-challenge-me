<template>
  <button
    v-bind="$attrs"
    :class="getClassButton"
    :disabled="disabled"
    @click="onClick"
  >
    <span v-if="texto.length">
      {{ texto }}
    </span>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  texto: {
    type: String,
    default: "",
  },
  tema: {
    type: String,
    default: "ligth",
  },
  preenchimento: {
    type: String,
    default: "ghost",
  },
  full: {
    type: Boolean,
    default: false,
  },
  onClick: {
    type: Function,
    default: () => {},
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const getClassButton = computed(() => {
  let classes = ["button"];

  if (props.full) {
    classes.push("button-full");
  }

  let temaPreenchimento = `${props.tema}-${props.preenchimento}`;
  if (props.disabled) {
    temaPreenchimento += "-disabled";
  }

  classes.push(temaPreenchimento);

  return classes;
});
</script>

<style lang="scss" scoped>
.button {
  padding: 0 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  height: 52px;

  &:disabled {
    background: $disabled;
    color: $light;
    cursor: not-allowed;
  }

  &-full {
    width: 100%;
  }
}
</style>
