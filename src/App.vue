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
import MiniPI from '@/components/MiniPI/MiniPI';
import Console from '@/components/Console/Console';
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
      currentPatient: {
        id: '1343543654764',
        name: '刘长春',
        gender: 0,
        date: '2018.05.04',
        bd: 'BD 2018.04.03',
        examples: [
          {
            id: 55,
            name: 'example 1',
            date: '2018.02.15'
          }
        ]
      }
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
  background: #253561;
}

@media screen and (orientation: portrait) {
  #app {
    flex-direction: column;
  }
}
</style>
