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
      <Plate title="Layout">
        <div class="icon-wrapper">
          <XIcon v-for="icon in layoutIcons" :key="icon.id" :img="icon.img" :selected.sync="icon.selected" :iconId="icon.id" iconList="layoutIcons" @select="SelectIcon"/>
        </div>
      </Plate>
      <Plate title="Public">
        <div class="icon-wrapper">
          <XIcon v-for="icon in publicIcons" :key="icon.id" :img="icon.img" :selected.sync="icon.selected" :iconId="icon.id" iconList="publicIcons" @select="SelectIcon"/>
        </div>
      </Plate>
      <Plate title="Other"></Plate>
      <Plate title="Illness"></Plate>
      <div class="footer">
        <div class="btn btn_backup next">
          <span>next</span>
        </div>
        <div class="btn btn_backup report" @click="toggleDD">
          <span>report</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import isEmpty from 'lodash/isEmpty';
import uniqueId from 'lodash/uniqueId';
import Plate from '@/components/common/Plate';
import XIcon from '@/components/common/XIcon';

import layout1 from '@/assets/Console/layout1.png';
import layout4 from '@/assets/Console/layout4.png';

import public1 from '@/assets/Console/public1.png';
import public2 from '@/assets/Console/public2.png';
import public3 from '@/assets/Console/public3.png';
import public4 from '@/assets/Console/public4.png';
import public5 from '@/assets/Console/public5.png';
import public6 from '@/assets/Console/public6.png';
import public7 from '@/assets/Console/public7.png';
import public8 from '@/assets/Console/public8.png';

export default {
  name: 'Console',
  components: { Plate, XIcon },
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
      layoutIcons: [layout1, layout4].map(icon => ({
        id: uniqueId('layout'),
        img: icon,
        selected: false
      })),
      publicIcons: [
        public1,
        public2,
        public3,
        public4,
        public5,
        public6,
        public7,
        public8
      ].map(icon => ({ id: uniqueId('public'), img: icon, selected: false }))
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
      this[list] = this[list].map(icon=>{
        if(id===icon.id){
          return {...icon, selected:true}
        }
        return {...icon, selected:false}
      })
    }
  }
};
</script>

<style lang="less" scoped>
.console {
  width: 15.432vw;
  height: 100vh;
  position: relative;
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

.footer {
  position: absolute;
  display: flex;
  bottom: 26px;
  width: 100%;
  color: #fff;
  justify-content: space-around;
  .btn {
    width: 88px;
    height: 24px;
    border-radius: 100px;
    display: flex;
    box-sizing: border-box;
    span {
      margin: auto;
    }
    &_backup {
      font-size: 12px;
      min-width: 88px;
      min-height: 24px;
    }
  }
  .next {
    font-weight: bold;
    background-image: linear-gradient(
      -34deg,
      #5e34a9 0%,
      #1a209e 44%,
      #427bf7 100%
    );
    box-shadow: 0 2px 12px 0 rgba(0, 29, 255, 0.35),
      inset 0 0 1px 0 rgba(255, 255, 255, 0.5);
  }
  .report {
    background: rgba(27, 54, 116, 0.5);
    border: 1px solid #ffffff;
  }
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
