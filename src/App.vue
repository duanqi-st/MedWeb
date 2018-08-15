<template>
  <div id="app" @contextmenu="handleRightClick">
    <keep-alive>
      <MiniPI :show="miniPIShow" :currentPatient.sync="currentPatient" />
    </keep-alive>
    <Console @onTogglePI="miniPIShow = !miniPIShow" @onToggleDD="handleToggleDD" :current="currentPatient" />
    <Main/>
    <DiseaseDiagnosis :show.sync="ddShow" :currentPatient="currentPatient" />
  </div>
</template>

<script>
import MiniPI from '@/components/MiniPI/MiniPI';
import Console from '@/components/Console/Console';
import Main from '@/components/Main';
import DiseaseDiagnosis from '@/components/DD/DiseaseDiagnosis';

export default {
  name: 'app',
  components: {
    MiniPI,
    Console,
    Main,
    DiseaseDiagnosis
  },
  data() {
    return {
      miniPIShow: true,
      ddShow: false,
      currentPatient: {}
    };
  },
  methods: {
    handleToggleDD() {
      this.ddShow = !this.ddShow;
      if (this.ddShow) {
        this.miniPIShow = false;
      }
    },
    handleRightClick(e) {
      e.preventDefault();
    }
  }
};
</script>

<style scoped>
#app {
  display: flex;

  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  background: #253561;
}

@media screen and (orientation: portrait) {
  #app {
    flex-direction: column;
  }
}
</style>
