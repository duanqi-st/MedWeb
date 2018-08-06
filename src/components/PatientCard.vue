<template>
  <div>
    <div class="container container_backup">
      <img :src="avatar" alt="avatar" class="avatar avatar_backup">
      <div class="info info_backup">
        <span class="info--name">{{info.name}}</span>
        <span class="info--bd">{{info.bd}}</span>
        <div class="info--id">{{info.id}}</div>
      </div>
      <div class="date date_backup">
        <span>{{info.date}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import female from '@/assets/female.png';
import male from '@/assets/male.png';

export default {
  name: 'PatientCard',
  props: {
    // info包含以下属性
    // gender Number 1/0
    // name String
    // bd String
    // id String
    // date String
    info: {
      type: Object,
      required: true
    }
  },
  // 计算属性
  computed: {
    /**
     * 动态计算用户头像 男／女
     * @return {String} 头像地址
     */
    avatar() {
      return this.info.gender ? male : female;
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 64px;

  border-top: 1px solid #8d99b2;
  &_backup {
    min-height: 64px;
  }
}

.avatar {
  width: 25px;
  height: 25px;
  &_backup {
    min-width: 25px;
    min-height: 25px;
  }
}

.info {
  &_backup {
    font-size: 12px;
    line-height: 1.7;
  }
  &--name,
  &--bd {
    color: #1b274d;
  }
  &--name {
    margin-right: 11px;

    font-weight: bold;
  }
  &--id {
    color: #3b4a81;
  }
}

.date {
  display: flex;

  box-sizing: border-box;
  width: 64px;
  height: 16px;

  opacity: 0.6;
  color: #fff;
  border-radius: 100px;
  background: #5a92ff;
  &_backup {
    min-width: 64px;
    min-height: 16px;

    font-size: 10px;
  }
  span {
    margin: auto;
  }
}
</style>
