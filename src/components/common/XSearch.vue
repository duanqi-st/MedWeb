<template>
  <input type="text" :placeholder="placeholder" class="x-input-search x-input-search_backup">
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="less" scoped>
.x-input-search {
  position: relative;
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-radius: 100px;
  transition: all 0.3s;
  color: #333;
  background: url('./../../assets/search.png') 95% center no-repeat, #fff;
  background-size: 1em 1em;
  &_backup {
    font-size: 12px;
    padding: 0.5em 1em;
  }
  &::-moz-placeholder {
    color: #576e98;
    opacity: 1;
  }
  &:-ms-input-placeholder {
    color: #576e98;
  }
  &::-webkit-input-placeholder {
    color: #576e98;
  }
  &:hover {
    box-shadow: 0 10px 10px 0 rgba(18, 18, 23, 0.2);
  }
  &:focus {
    outline: none;
    box-shadow: 0 10px 10px 0 rgba(18, 18, 23, 0.2);
    background-image: none;
  }
}
</style>
