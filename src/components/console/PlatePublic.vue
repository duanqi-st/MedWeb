<template>
  <Plate title="Public">
    <div class="icon-wrapper">
      <x-icon name="enlarge" :current.sync="current">
        <enlarge></enlarge>
      </x-icon>
      <x-icon name="move" :current.sync="current">
        <move></move>
      </x-icon>
      <x-icon name="invert" :current.sync="current">
        <invert></invert>
      </x-icon>
      <x-icon name="left" :current.sync="current">
        <left></left>
      </x-icon>
      <x-icon name="right" :current.sync="current">
        <right></right>
      </x-icon>
      <x-icon name="text" :current.sync="current">
        <text-x></text-x>
      </x-icon>
      <x-icon name="rect" :current.sync="current">
        <rect-x></rect-x>
      </x-icon>
      <x-icon name="angle" :current.sync="current">
        <angle></angle>
      </x-icon>
      <x-icon name="undo" :current.sync="current">
        <undo></undo>
      </x-icon>

      <!-- <icon name="Group 15" scale="200"></icon> -->
    </div>
  </Plate>
</template>

<script>
// component
import Plate from '@/components/common/Plate';
import XIcon from '@/components/common/XIcon';
// icon
import rightS from '@/svg/right.svg';
import enlarge from '@/svg/enlarge.svg';
import move from '@/svg/move.svg';
import invert from '@/svg/invert.svg';
import left from '@/svg/left.svg';
import right from '@/svg/right.svg';
import angle from '@/svg/angle.svg';
import textX from '@/svg/text.svg';
import undo from '@/svg/undo.svg';
import rectX from '@/svg/rect.svg';
import ttt from '@/svg/Group 37.svg';

export default {
  name: 'PlatePublic',
  components: {
    Plate,
    XIcon,
    rightS,
    enlarge,
    move,
    invert,
    left,
    right,
    angle,
    textX,
    undo,
    rectX,
    ttt
  },
  data() {
    return {
      current: 'enlarge'
    };
  },
  methods: {
    handleClick(name) {
      this.current = name;
    }
  }
};
</script>

<style lang="less" scoped>
.icon-wrapper {
  padding: 6px 10px;
}
</style>
