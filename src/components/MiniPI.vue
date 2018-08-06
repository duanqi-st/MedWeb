<template>
  <div class="mini-pi mini-pi_ignore">
    <PatientCard />
  </div>
</template>

<script>
import PatientCard from '@/components/PatientCard';
export default {
  name: 'MiniPI',
  components: { PatientCard },
  data() {
    return {
      list: [{ id: 1, name: '王大力' }, { id: 2, name: '刘长春' }]
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

.mini-pi_ignore {
  min-width: 289px;
}
</style>

