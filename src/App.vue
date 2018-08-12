<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
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
