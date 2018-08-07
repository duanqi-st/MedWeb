<template>
  <div class="case case_backup">
    <div class="item item_backup" :class="{'item_active':item.id===currentId}" v-for="item in list" :key="item.id" @click="()=>handleSelect(item)">
      <span>
        {{item.name}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Case',
  data() {
    return {
      list: [
        {
          id: 1,
          name: '脑瘤术后改变1',
          behavier: '这里是放射学表现11111111111',
          diagnosis: '这里是放射学诊断11111111111'
        },
        {
          id: 2,
          name: '脑瘤术后改变2',
          behavier: '这里是放射学表现2222222',
          diagnosis: '这里是放射学诊断2222222'
        }
      ],
      currentId: null
    };
  },
  methods: {
    handleSelect(item) {
      this.currentId = item.id;
      this.$emit('select', item);
    }
  }
};
</script>

<style lang="less" scoped>
.case {
  display: block;
  height: 100vh;
  width: 188px;
  background: #fff;
  &_backup {
    min-width: 188px;
  }

  .item {
    width: 100%;
    height: 34px;
    box-shadow: inset 0 -1px 0 0 #8d99b2;

    color: #2d2d2d;
    display: flex;
    font-size: 12px;
    &_active {
      color: #fff;
      background: #5a92ff;
      box-shadow: 0 4px 12px 0 rgba(51, 103, 237, 0.4);
    }
    &_backup {
      min-height: 34px;
    }
    span {
      margin: auto 18px;
    }
  }
}
</style>
