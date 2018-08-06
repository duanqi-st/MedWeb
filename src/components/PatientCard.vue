<template>
  <div class="container">
    <img src="http://temp.im/100/100" alt="avatar" class="avatar">
    <div class="info">
      <span>Taylor Swift</span>
      <span>BD 2018.1.1</span>
      <div>1343543654765</div>
    </div>
    <div class="date date_ignore">
      <span>2018.1.1</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PatientCard'
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 64px;
}

.avatar {
  width: 35px;
  height: 35px;
}

.date {
  display: flex;

  box-sizing: border-box;
  width: 54px;
  height: 16px;

  opacity: 0.6;
  color: #fff;
  border-radius: 100px;
  background: #5a92ff;
}

.date > span {
  margin: auto;
}

.date_ignore {
  min-width: 54px;
  min-height: 16px;

  font-size: 10px;
}
</style>
