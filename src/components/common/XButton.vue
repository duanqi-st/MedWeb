<template>
  <div @click="handleClick" @mousedown="handleMousedown" @mouseup="handleMouseup" role="button" :class="buttonStyle">
    <span class="x-button--inner">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'XButton',
  props: {
    lg: {
      type: Boolean,
      required: false,
      default: false
    },
    md: {
      type: Boolean,
      required: false,
      default: false
    },
    sm: {
      type: Boolean,
      required: false,
      default: false
    },
    ghost: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      clicked: false
    };
  },
  computed: {
    buttonStyle() {
      return {
        'x-button': true,
        'x-button_backup': true,
        'x-button_lg': this.lg,
        'x-button_lg_backup': this.lg,
        'x-button_md': this.md,
        'x-button_md_backup': this.md,
        'x-button_sm': this.sm,
        'x-button_sm_backup': this.sm,
        'x-button_color': !this.ghost,
        'x-button_ghost': this.ghost,
        'x-button_clicked': this.clicked
      };
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
    handleMousedown() {
      this.clicked = true;
    },
    handleMouseup() {
      this.clicked = false;
    }
  }
};
</script>

<style lang="less" scoped>
.x-button {
  cursor: pointer;
  color: #fff;
  border-radius: 100px;
  box-sizing: border-box;
  display: flex;
  position: relative;
  &--inner {
    margin: auto;
  }
  &_backup {
    font-size: 14px;
  }
  &_lg {
    width: 160px;
    height: 40px;
    &_backup {
      min-width: 160px;
      min-width: 40px;
    }
  }
  &_md {
    // width: 110px;
    // height: 24px;
    &_backup {
      min-width: 110px;
      min-height: 24px;
    }
  }
  &_sm {
    width: 110px;
    height: 16px;
    &_backup {
      min-width: 110px;
      min-height: 16px;
    }
  }
  &_ghost {
    border: 1px solid #fff;
  }
  &_color {
    background-image: linear-gradient(
      56deg,
      #5e34a9 0%,
      #1a209e 44%,
      #427bf7 100%
    );
    box-shadow: 0 2px 12px 0 rgba(0, 29, 255, 0.35),
      inset 0 0 1px 0 rgba(255, 255, 255, 0.5);
  }
  &_clicked {
    &::after {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      bottom: -1px;
      right: -1px;
      border-radius: inherit;
      background: #fff;
      opacity: 0.2;
      display: block;
    }
  }
}
</style>
