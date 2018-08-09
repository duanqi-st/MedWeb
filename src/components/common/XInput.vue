<template>
  <input type="text" :placeholder="placeholder" class="x-input x-input_backup">
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
.x-input {
  position: relative;
  display: inline-block;
  width: 100%;
  background-image: none;
  border: 1px solid #dcdfe6;
  border-radius: 100px;
  transition: all 0.3s;
  color: #333;
  &_backup {
    font-size: 14px;
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
    border: 1px solid #91959d;
  }
  &:focus {
    outline: none;
    border: 1px solid #427bf7;
  }
}
</style>
