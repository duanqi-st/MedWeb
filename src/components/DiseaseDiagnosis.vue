<template>
  <transition name="slide-fade">
    <div v-if="show" class="container">
      <div>something</div>
      <Case/>
    </div>
  </transition>
</template>

<script>
import Case from '@/components/Case';

export default {
  name: 'DiseaseDiagnosis',
  components: { Case },
  props: {
    show: {
      type: Boolean,
      required: false,
      default: true
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  position: fixed;
  display: flex;
  right: 0;
  z-index: 50;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-15vw);

  opacity: 0;
}
</style>
