<template>
    <h1>Buscar pokemon: {{ pokemonId }}</h1>
    <form @submit.prevent="onSubmit">
        <input 
            type="number"
            placeholder="Numero del pokemon"            
            v-model="pokemonId"
            ref="txtSearch"
        >
    </form>
    <br>
    <span> Presione Enter para Buscar</span>
</template>
<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup(){
        const router = useRouter()
        const pokemonId = ref(1)
        const txtSearch = ref()

        onActivated(()=>{
            txtSearch.value.select();
        })
        return {
            pokemonId,
            txtSearch,
            onSubmit: () => {
                //console.log('pokemon a  buscar:', pokemonId.value)
                router.push({ name: 'pokemon-id', params: { id: pokemonId.value }})
            }
        }
    }   
}
</script>
<style scoped></style>