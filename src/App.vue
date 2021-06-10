<template>
  <div id="app">
    <div class="row">
      <amoon-button>登陆</amoon-button>
      <amoon-button type="danger">删除</amoon-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  .amoon-button {
    margin-right: 20px;
  }
}
</style>
