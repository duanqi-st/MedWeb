<template>
  <Plate title="Other">
    <div class="other--row">
      <label class="other--label">
        WL

      </label>
      <el-select v-model="value" size="mini" style="width:100px;">
        <el-option v-for="option in options" :key="option" :label="option" :value="option" />
      </el-select>
    </div>
    <div class="other--row">
      <label class="other--label">
        pseudo-color

      </label>
      <el-select v-model="value" size="mini" style="width:100px;">
        <el-option v-for="option in options" :key="option" :label="option" :value="option" />
      </el-select>
    </div>
  </Plate>
</template>

<script>
// component
import Plate from '@/components/common/Plate';

export default {
  name: 'PlateOther',
  components: {
    Plate
  },
  data() {
    return {
      options: ['Abdomen', 'MIP', 'MinIP', 'DVR'],
      value: 'Abdomen'
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
.other {
  &--row {
    margin-bottom: 6px;

    color: rgba(255, 255, 255, 0.8);

    font-size: 12px;
  }
  &--label {
    display: inline-block;

    width: 8em;
    margin-right: 1em;

    text-align: right;
  }
}
</style>