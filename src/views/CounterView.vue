<template>
    <h1>Counter View</h1>
    <h2>{{ counter }}</h2>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
</template>
<script>
import useCounter from '@/composables/useCounter';

export default {
    name: 'counter',
    props: {},
    emits: [],
    setup() {
      const { counter, increase, decrease } =  useCounter(25);

      return {
        counter, increase, decrease
      }
    },
}
</script>
<style>
</style>