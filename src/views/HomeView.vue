<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>

    <button @click="changeIronman">Cambiar Ironman</button>
    <button @click="changeHulk">Cambiar Hulk</button>
    <hr>
    <h3>Ironman: {{ ironManIsAlive }}</h3>
    <h3>Hulk: {{ hulkIsAlive }}</h3>
    <button @click="changeStatus">Cambiar Status</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'Home',
  setup(){
    const ironman = ref({ name: 'Tony', age: 50})
    const hulk = reactive({ name: 'Bruce',  age:50 })
    const ironManIsAlive = reactive(false)
    const hulkIsAlive = ref(true)

    const changeStatus  = ()=> {
      hulkIsAlive.value = !hulkIsAlive.value
     // ironManIsAlive = reactive(!ironManIsAlive)
    }
    return {
      ironman,
      hulk,
      changeStatus,
      ironManIsAlive,
      hulkIsAlive,
      hulk,
      changeIronman: () =>{
        ironman.value.name = 'Tony Stark'
        ironman.value.age  = 55
      },
      changeHulk: () =>{
        hulk.name = 'Bruce Banner'
        hulk.age  = 45
      },      
    }
  }
}
</script>
