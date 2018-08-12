<template>
  <Plate title="Layout">
    <div class="icon-wrapper">
      <XIcon name="layout1" :current.sync="current">
        <Layout1></Layout1>
      </XIcon>
      <XIcon name="layout4" :current.sync="current">
      </XIcon>
    </div>
  </Plate>
</template>

<script>
// component
import Plate from '@/components/common/Plate';
import XIcon from '@/components/common/XIcon';
// icon
import Layout4 from '@/svg/Layout4.svg';
import Layout1 from '@/components/icon/Layout4';

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