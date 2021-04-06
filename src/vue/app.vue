<template>
  <div>   
    <h2 class="title">{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: '我是cgl组件，来自app.vue。。。。。'
    }
  }
};
</script>

<style scoped>
  .title{
    color: brown;
  }
</style>