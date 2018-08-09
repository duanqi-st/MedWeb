<template>
  <Plate title="Public">
    <Enlarge></Enlarge>
    <Move></Move>
    <Invert></Invert>
    <Left></Left>
    <Right></Right>
    <TextX></TextX>
    <RectX></RectX>
    <Angle></Angle>
    <Crop></Crop>
    <Undo></Undo>
  </Plate>
</template>

<script>
// component
import Plate from '@/components/common/Plate';
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

export default {
  name: 'PlatePublic',
  components: {
    Plate,
    Enlarge,
    Move,
    Invert,
    Left,
    Right,
    TextX,
    RectX,
    Angle,
    Crop,
    Undo
  },
  data() {
    return {};
  }
};
</script>
