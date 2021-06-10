<template>
  <button :class="`amoon-button-${type}`">
    <span>
      <!-- 组件插槽 -->
      <!-- 当有部分内容不是写死的，就可以使用插槽 -->
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "AmoonButton",
  // 封装一个通用的组件，需要对props进行约束或进行校验
  props: {
    type: {
      type: String,
      default: "common",
    },
  },
};
</script>

<style lang="scss" scoped>
.amoon-button-common {
  background-color: transparent;
}
.amoon-button-danger {
  background-color: #f00;
}
</style>