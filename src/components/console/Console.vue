<template>
  <transition name="slide-fade" mode="in-out">
    <div v-show="show" class="console console_backup">
      <div class="header header_backup">
        <div class="toggle toggle_backup" @click="toggleMiniPI">
          <div class="toggle--inner"></div>
        </div>
        <span>Tools</span>
        <el-select size="mini" v-model="toolFilter" class="filter-select">
          <el-option label="2d" value="2d" />
          <el-option label="3d" value="3d" />
        </el-select>

      </div>
      <div class="patient">
        <span>{{current.name}}</span>
        <span>{{current.bd}}</span>
        <div>{{current.id}}</div>
      </div>
      <PlateLayout></PlateLayout>
      <PlatePublic></PlatePublic>
      <PlateOther></PlateOther>
      <Plate title="Illness"></Plate>
      <div class="footer">
        <XButton md>next</XButton>
        <XButton md ghost @click="toggleDD">report</XButton>
      </div>
    </div>
  </transition>
</template>

<script>
import isEmpty from 'lodash/isEmpty';

import PlateLayout from './PlateLayout';
import PlatePublic from './PlatePublic';
import PlateOther from './PlateOther';
import Plate from '@/components/common/Plate';
import XIcon from '@/components/common/XIcon';
import XButton from '@/components/common/XButton';

// icon
import male from '@/svg/male_ghost.svg';
import female from '@/svg/female_ghost.svg';

export default {
  name: 'Console',
  components: { Plate, XIcon, PlateLayout, PlatePublic, PlateOther, XButton },
  props: {
    current: {
      type: Object,
      required: false,
      // 类型为 Object 的时候, 需要提供一个函数，函数返回默认对象
      // 此处默认对象为空对象
      default: () => ({})
    }
  },
  data() {
    return {
      toolFilter: '2d'
    };
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
      this.$emit('onTogglePI');
    },
    toggleDD() {
      this.$emit('onToggleDD');
    },
    SelectIcon(id, list) {
      this[list] = this[list].map(icon => {
        if (id === icon.id) {
          return { ...icon, selected: true };
        }
        return { ...icon, selected: false };
      });
    }
  }
};
</script>

<style lang="less" scoped>
@media screen and (orientation: portrait) {
  .console {
    order: 3;
  }
}
.console {
  position: relative;

  flex: 25;

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

.icon-wrapper {
  box-sizing: border-box;
  width: 100%;
  padding: 10px 20px;
}

.filter-select {
  width: 72px;
}

.footer {
  position: absolute;
  bottom: 26px;

  display: flex;
  justify-content: space-around;

  width: 100%;

  color: #fff;
  .btn {
    display: flex;

    box-sizing: border-box;
    width: 88px;
    height: 24px;

    border-radius: 100px;
    span {
      margin: auto;
    }
    &_backup {
      min-width: 88px;
      min-height: 24px;

      font-size: 12px;
    }
  }
  .next {
    background-image: linear-gradient(
      -34deg,
      #5e34a9 0%,
      #1a209e 44%,
      #427bf7 100%
    );
    box-shadow: 0 2px 12px 0 rgba(0, 29, 255, 0.35),
      inset 0 0 1px 0 rgba(255, 255, 255, 0.5);

    font-weight: bold;
  }
  .report {
    border: 1px solid #ffffff;
    background: rgba(27, 54, 116, 0.5);
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-15vw);

  opacity: 0;
}
</style>
