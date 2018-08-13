<template>
  <div class="filter-plate">
    <div class="filter-plate--search filter-plate--search_backup">
    </div>
    <div class="filter-plate--search-wrapper">
      <XSearch placeholder="import name or ID" />
    </div>
    <div class="filter-plate--button-group">
      <XButton md>Unchecked</XButton>
      <XButton md ghost>Checked</XButton>
    </div>
  </div>
</template>

<script>
import XSearch from '@/components/common/XSearch';
import XButton from '@/components/common/XButton';
export default {
  name: 'FilterPlate',
  components: {
    XSearch,
    XButton
  }
};
</script>

<style lang="less" scoped>
.filter-plate {
  position: relative;
  overflow: hidden;
  &--search {
    position: relative;
    &_backup {
      height: 80px;
      &::after {
        background-image: linear-gradient(
          to left,
          #5e34a9 0%,
          #1a209e 44%,
          #427bf7 100%
        );
        box-shadow: 0 2px 14px 0 rgba(80, 100, 255, 0.35);
        border-radius: 100%;
        position: absolute;
        content: '';
        width: 1500px;
        height: 1500px;
        top: -1420px;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
  }

  &--search-wrapper {
    width: 90%;
    position: absolute;
    z-index: 10;
    top: 20px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  &--button-group {
    display: flex;
    margin: 20px auto;
    justify-content: space-around;
  }
}
</style>
