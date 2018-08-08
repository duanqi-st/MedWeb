<template>
  <div :class="{'icon_active':selected}" class="icon icon_backup" :style="{'background-image':`url(${img})`}" @click="()=>handleSelect(selected,iconId, iconList)">
  </div>
</template>

<script>
export default {
  name: 'XIcon',
  props: {
    img: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      required: false,
      default: false
    },
    iconId: {
      type: String,
      required: true
    },
    iconList: {
      type: String,
      required: true
    }
  },
  methods: {
    handleSelect(selected,id, list) {
      if(!selected){
        this.$emit('select', id, list);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.icon {
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 10%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 10px;
  &_backup {
    min-width: 35px;
    min-height: 35px;
  }
}

.icon_active {
  .icon;
  background-color: rgba(7, 17, 27, 0.5);
}
</style>
