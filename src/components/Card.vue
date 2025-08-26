<template>
  <div class="card">
    <div class="card-label">{{ dados?.label }}</div>
    <div>
      <span class="card-title">
        {{ dados?.name }}
      </span>
      <span class="card-destaque" v-if="dados?.code">
        {{ dados?.code }}
      </span>
    </div>
    <div class="card-group">
      <div class="card-container">
        <div class="card-texto">
          {{ dados?.address }}
        </div>
        <div class="card-texto">
          {{ dados?.contact?.name }}
        </div>
      </div>
      <div class="card-container">
        <div class="card-texto">
          {{ dados?.contact?.email }}
        </div>
        <div class="card-texto">
          {{ dados?.contact?.phone }}
        </div>
        <div class="card-texto">
          {{ dados?.contact?.fax }}
        </div>
        <div class="card-texto" v-if="dados?.lastReplyAt">
          {{ dados?.lastReplyAt }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dados: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  margin: 20px 0;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background: #fff;
  flex: 1;
  @media (max-width: 450px) {
    width: 100%;
  }
  &-label {
    font-size: 12px;
    color: $text;
    margin-bottom: 4px;
  }
  &-title {
    font-size: 14px;
    font-weight: 600;
    color: $text;
  }
  &-destaque {
    font-weight: 600;
    font-size: 16px;
    color: $primary;
    background-color: rgba($primary, 0.1);
    border-radius: 4px;
    padding: 0 4px;
    margin-left: 10px;
  }
  &-texto {
    line-height: 16px;
    font-size: 12px;
    color: $text;
  }
  &-group {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  &-container {
    flex: 1;
    margin-top: 1rem;
    flex-wrap: wrap;
    @media (max-width: 450px) {
      min-width: 300px;
    }
  }
}
</style>
