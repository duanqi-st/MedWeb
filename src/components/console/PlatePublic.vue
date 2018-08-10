<template>
  <Plate title="Public">
    <div class="icon-wrapper">
      <XIcon name="enlarge" :current.sync="current">
        <Enlarge />
      </XIcon>
      <XIcon name="move" :current.sync="current">
        <Move />
      </XIcon>
      <XIcon name="invert" :current.sync="current">
        <Invert />
      </XIcon>
      <XIcon name="left" :current.sync="current">
        <Left />
      </XIcon>
      <XIcon name="right" :current.sync="current">
        <Right />
      </XIcon>
      <XIcon name="text" :current.sync="current">
        <TextX />
      </XIcon>
      <XIcon name="rect" :current.sync="current">
        <RectX />
      </XIcon>
      <XIcon name="angle" :current.sync="current">
        <Angle />
      </XIcon>
      <XIcon name="crop" :current.sync="current">
        <Crop />
      </XIcon>
      <XIcon name="undo" :current.sync="current">
        <Undo />
      </XIcon>
      <rightS></rightS>
      <!-- <icon name="Group 15" scale="200"></icon> -->
    </div>
  </Plate>
</template>

<script>
// component
import Plate from '@/components/common/Plate';
import XIcon from '@/components/common/XIcon';
// icon
import Enlarge from '@/components/icon/Enlarge';
import Move from '@/components/icon/Move';
import Invert from '@/components/icon/Invert';
import Left from '@/components/icon/Left';
import Right from '@/components/icon/Right';
import TextX from '@/components/icon/Text';
import RectX from '@/components/icon/Rect';
import Angle from '@/components/icon/Angle';
import Crop from '@/components/icon/Crop';
import Undo from '@/components/icon/Undo';

import rightS from '@/svg/right.svg';

export default {
  name: 'PlatePublic',
  components: {
    Plate,
    XIcon,
    Enlarge,
    Move,
    Invert,
    Left,
    Right,
    TextX,
    RectX,
    Angle,
    Crop,
    Undo,
    rightS
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
