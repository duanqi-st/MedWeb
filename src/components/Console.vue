<template>
  <div class="console console_ignore">
    <div class="close-btn">close</div>
  </div>
</template>

<script>
export default {
  name: 'Console'
};
</script>

<style scoped>
.console {
  width: 15.432vw;
  height: 100vh;

  background: #253561;
}

.console_ignore {
  min-width: 252px;
}

.close-btn {
  width: 30px;
}
</style>
