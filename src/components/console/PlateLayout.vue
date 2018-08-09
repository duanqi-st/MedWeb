<template>
  <Plate title="Layout">
    <Layout1></Layout1>
    <Layout4></Layout4>
  </Plate>
</template>

<script>
import Plate from '@/components/common/Plate';

import Layout1 from '@/components/icon/Layout1';
import Layout4 from '@/components/icon/Layout4';

export default {
  name: 'PlateLayout',
  components: {
    Plate,
    Layout1,
    Layout4
  }
};
</script>
