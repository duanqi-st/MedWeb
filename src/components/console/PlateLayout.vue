<template>
  <Plate title="Layout">
    <div class="icon-wrapper">
      <XIcon name="layout1" :current.sync="current">
        <Layout1 />
      </XIcon>
      <XIcon name="layout4" :current.sync="current">
        <Layout4 />
      </XIcon>
    </div>
  </Plate>
</template>

<script>
// component
import Plate from '@/components/common/Plate';
import XIcon from '@/components/common/XIcon';
// icon
import Layout1 from '@/components/icon/Layout1';
import Layout4 from '@/components/icon/Layout4';

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