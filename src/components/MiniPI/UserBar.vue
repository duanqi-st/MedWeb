<template>
  <div class="user-bar user-bar_backup">
    <div class="user-bar--user">
      <img src="http://temp.im/300/300" alt="avatar" class="user-bar--user-avatar">
      <span class="user-bar--user-name">user name</span>
    </div>
    <div class="user-bar--divider user-bar--divider_backup"></div>
    <div class="user-bar--logo">
      <span class="user-bar--logo_thin">SENSE</span>
      <span class="user-bar--logo_blod">CARE</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.user-bar {
  background: #1a284d;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  &_backup {
    height: 64px;
  }

  &--user {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-around;
    &-avatar {
      height: 32px;
      border-radius: 100%;
    }
    &-name {
      color: #fff;
    }
  }

  &--divider {
    &_backup {
      height: 54px;
      width: 1px;
      background: rgba(255, 255, 255, 0.4);
    }
  }

  &--logo {
    flex: 1;
    text-align: center;
    background-image: -webkit-linear-gradient(left, #9254ff, #565eff, #417dff);
    -webkit-background-clip: text;
    color: transparent;
    &_thin {
      font-weight: lighter;
    }
    &_blod {
      font-weight: bold;
    }
  }
}
</style>
