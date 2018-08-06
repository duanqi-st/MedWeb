<template>
  <transition name="slide-fade">
    <div v-show="show" class="console console_backup">
      <div class="header header_backup">
        <div class="toggle toggle_backup" @click="toggleMiniPI">
          <div class="toggle--inner"></div>
        </div>
        <span>Tools</span>
        <select>
          <option value="2"></option>
        </select>
      </div>
      <div class="patient">
        <span>{{current.name}}</span>
        <span>{{current.bd}}</span>
        <div>{{current.id}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
import isEmpty from 'lodash/isEmpty';

export default {
  name: 'Console',
  props: {
    current: {
      type: Object,
      required: false,
      // 类型为 Object 的时候, 需要提供一个函数，函数返回默认对象
      // 此处默认对象为空对象
      default: () => ({})
    }
  },
  computed: {
    /**
     * 是否显示控制台
     * @return {Boolean}
     */
    show() {
      return !isEmpty(this.current);
    }
  },
  methods: {
    toggleMiniPI() {
      this.$emit('onToggle');
    }
  }
};
</script>

<style lang="less" scoped>
.console {
  width: 15.432vw;
  height: 100vh;

  background: #253561;
  &_backup {
    min-width: 252px;
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  padding: 0 9px;

  color: #fff;
  background: #1a284d;
  &_backup {
    height: 45px;

    font-size: 14px;
  }
}

.toggle {
  &_backup {
    box-sizing: border-box;
    width: 20px;
    height: 14px;

    border: 1px solid #fff;
  }
  &--inner {
    height: 100%;
    margin-left: 5px;

    border-left: 1px solid #fff;
  }
}

.patient {
  color: #fff;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-15vw);

  opacity: 0;
}
</style>
