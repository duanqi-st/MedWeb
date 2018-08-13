<template>
  <Plate title="Layout">
    <div class="icon-wrapper">
      <XIcon name="layout1" :current.sync="current">
        <Layout1></Layout1>
      </XIcon>
      <XIcon name="layout4" :current.sync="current">
        <Layout4></Layout4>
      </XIcon>
    </div>
  </Plate>
</template>

<script>
// component
import Plate from '@/components/common/Plate';
import XIcon from '@/components/common/XIcon';
// icon
import Layout1 from '@/svg/Layout1.svg';
import Layout4 from '@/svg/Layout4.svg';

export default {
  name: 'PlateLayout',
  components: {
    Plate,
    XIcon,
    Layout1,
    Layout4
  },
  data() {
    return {
      current: 'layout1'
    };
  },
  beforeDestroy() {
    this.$bus.off('switchLayout');
  },
  watch: {
    current(value) {
      this.$bus.emit('switchLayout', value);
    }
  }
};
</script>

<style lang="less" scoped>
.icon-wrapper {
  padding: 6px 10px;
}
</style>