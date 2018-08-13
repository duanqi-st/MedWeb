<template>
  <transition name="slide-fade">
    <div v-if="show" class="container">
      <Report @submit="submit" :current="current" :currentPatient="currentPatient" />
      <Case @select="handleSelect" />
    </div>
  </transition>
</template>

<script>
import Report from '@/components/Report';
import Case from '@/components/Case';

export default {
  name: 'DiseaseDiagnosis',
  components: { Case, Report },
  props: {
    show: {
      type: Boolean,
      required: false,
      default: false
    },
    currentPatient: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      current: {}
    };
  },
  methods: {
    submit() {
      this.$emit('update:show', false);
    },
    handleSelect(item) {
      this.current = item;
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  flex: 137;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(15vw);

  opacity: 0;
}
</style>
