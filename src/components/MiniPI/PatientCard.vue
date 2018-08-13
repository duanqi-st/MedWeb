<template>
  <div @click="()=>handleClickPI(info.id)">
    <div class="container container_backup" :class="{'container_active':shouldShowExamples}">
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
    <div v-if="shouldShowExamples">
      <div v-for="example in info.examples" :key="example.id" @click="()=>handleClickExample(example.id)" class="example example_backup">
        <div>{{example.name}}</div>
        <div>{{example.date}}</div>
        <div>{{example.id}}</div>
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
    // examples Array
    info: {
      type: Object,
      required: true
    },
    current: {
      type: String,
      required: false,
      default: null
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
    },
    shouldShowExamples() {
      return this.info.id === this.current;
    }
  },
  methods: {
    handleClickPI(id) {
      this.$emit('update:current', id);
    },
    handleClickExample(id) {
      this.$emit('select', id);
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
  color: #1b274d;
  border-top: 1px solid #8d99b2;
  &_active {
    background: #5a92ff;
    box-shadow: 0 4px 12px 0 rgba(51, 103, 237, 0.4);
    color: #fff;
    z-index: 10;
    border-bottom-left-radius: 30px;
  }
  &_backup {
    min-height: 64px;
  }
}

.avatar {
  width: 23px;
  height: 25px;
  &_backup {
    min-width: 23px;
    min-height: 25px;
  }
}

.info {
  &_backup {
    font-size: 12px;
    line-height: 1.7;
  }

  &--name {
    margin-right: 11px;

    font-weight: bold;
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

.example {
  display: flex;
  align-items: center;
  height: 30px;
  box-sizing: border-box;
  padding-left: 56px;
  justify-content: space-around;
  position: relative;

  &_backup {
    min-height: 30px;
    font-size: 12px;
  }
  &:nth-child(2n + 1) {
    color: #3b4a81;
    &::after {
      position: absolute;
      content: '';
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
  &:nth-child(2n) {
    color: #fff;
    background: #6089d8;
  }
}

@media screen and (orientation: portrait) {
  .container {
    display: none;
  }
}
</style>
