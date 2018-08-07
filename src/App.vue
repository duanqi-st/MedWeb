<template>
  <div id="app">
    <keep-alive>
      <MiniPI :show="miniPIShow" :currentPatient.sync="currentPatient" />
    </keep-alive>
    <Console @onTogglePI="miniPIShow = !miniPIShow" @onToggleDD="ddShow = !ddShow" :current="currentPatient" />
    <Main/>
    <DiseaseDiagnosis :show.sync="ddShow" :currentPatient="currentPatient" />
  </div>
</template>

<script>
import MiniPI from '@/components/MiniPI';
import Console from '@/components/Console';
import Main from '@/components/Main';
import DiseaseDiagnosis from '@/components/DiseaseDiagnosis';

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
}
</style>
