<template>
  <transition>
    <div v-show="show" class="mini-pi mini-pi_backup">
      <PatientCard v-for="patitent in list" :key="patitent.id" :info="patitent" />
    </div>
  </transition>
</template>

<script>
import PatientCard from '@/components/PatientCard';
export default {
  name: 'MiniPI',
  components: { PatientCard },
  props: {
    show: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      list: [
        {
          id: '1343543654765',
          name: '王大力',
          gender: 1,
          date: '2018.01.01',
          bd: 'BD 2018.01.01'
        },
        {
          id: '1343543654764',
          name: '刘长春',
          gender: 0,
          date: '2018.05.04',
          bd: 'BD 2018.04.03'
        }
      ]
    };
  }
};
</script>

<style scoped>
.mini-pi {
  box-sizing: border-box;
  width: 17.901vw;
  height: 100vh;

  background: linear-gradient(to bottom, #dadcee, #fff);
}

.mini-pi_backup {
  min-width: 289px;
}
</style>

