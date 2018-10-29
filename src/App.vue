<template>
  <div>
    <home></home>
  </div>
</template>

<script>
import home from './komponen/home.vue'
export default {
  name: 'app',
  components :{
    home,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>