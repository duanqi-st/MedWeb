<template>
  <div id="app">
    <keep-alive>
      <MiniPI :show="miniPIShow" />
    </keep-alive>
    <Console @onToggle="handleToggle" />
    <Main/>
  </div>
</template>

<script>
import MiniPI from '@/components/MiniPI.vue';
import Console from '@/components/Console.vue';
import Main from '@/components/Main.vue';

export default {
  name: 'app',
  components: {
    MiniPI,
    Console,
    Main
  },
  data() {
    return {
      miniPIShow: true,
      consoleShow: false
    };
  },
  methods: {
    handleToggle() {
      this.miniPIShow = !this.miniPIShow;
    }
  }
};
</script>

<style scoped>
#app {
  display: flex;
  overflow: hidden;

  width: 100vw;
  height: 100vh;
}
</style>
