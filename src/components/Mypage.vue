<template>
  <div>
    <h4>this is my page!</h4>
    <p>{{$store.state.num}}</p>
    <p @click="add()">加一个</p>
    <p @click="egg()">减一个</p>
    <p>{{$store.getters.Reverse}}</p>
    <moudle-one></moudle-one>
  </div>
</template>

<script>
import MoudleOne from './moudle1.vue'
export default {
  name: 'Mypage',
  data () {
    return {
      num: 2
    }
  },
  components: {
    MoudleOne
  },
  methods: {
    add () {
      this.$store.dispatch('Add')
    },
    egg () {
      this.$store.dispatch('Egg')
    }
  }
}
</script>

<style>
</style>
