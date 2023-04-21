<template>
    <h1>Thanos todo list</h1>
    <h4>Pendientes: {{ pending.length }}</h4>

    <button 
        :class="{'active': currenTab ==='all'}"
        @click="currenTab='all'"
     >
         Todos
    </button>
    <button 
        :class="{'active': currenTab ==='pending'}"
        @click="currenTab='pending'"
    >
         Pendientes
    </button>
    <button 
        :class="{'active': currenTab ==='completed'}"
        @click="currenTab='completed'"
    >
         Completados
    </button>
    
    <div>
        <ul>
            <li
             v-for="todo in getTodosByTab"
             :class="{'completed': todo.completed}"
             :key="todo.id"
             @dblclick="toggleTodo(todo.id)"
             >
             
                {{ todo.text }}
            </li>
        </ul>
    </div>
    <button @click="isOpen = true" >Crear Todo</button>

    <!--Modal-->
    <modal v-if="isOpen"
        @on:close="isOpen = false"
        >   
        <template v-slot:header>
            <h1>Nueva tarea</h1>
        </template>
        <template v-slot:body>
            <form @submit.prevent="createTodo(newTodoText); isOpen=false">
            <input type="text"
                placeholder="Nueva Tarea" maxlength="14"
                v-model="newTodoText" >           
            <br>
            <br>
            <br>
            <button type="submit">Crear</button>
           </form>

        </template>
    </modal>
</template>
<script>
import { ref } from "vue"
import useTodos from "../composables/useTodos";
import Modal from "../components/Modal.vue"
export default {
    components: { Modal },
    
    setup(){

       const { pending, currenTab,  getTodosByTab, toggleTodo, createTodo}    = useTodos()
       
       return{
        pending,
        currenTab,
        getTodosByTab,
        toggleTodo,
        createTodo,
        isOpen: ref(false),
        newTodoText: ref('')
       }
    }
}

</script>
<style scoped>
div {
    display: flex;
    justify-content: center;
    text-align: center;
}

ul{
    width: 300px;
    text-align: left;
}
li{
    text-transform: capitalize;
    list-style-type: none;
    cursor: pointer;
    transition: 0.2s;
}
li:hover{
    background-color: rgb(247, 247, 247);    
}
.active{
    background-color: #2c3e50;
    color: white;
}
.completed{
    text-decoration: line-through;
}
input[type=text] {
    padding: 5px;
    font-size: 16px;
    border-width: 1px;
    border-color: #CCCCCC;
    background-color: #FFFFFF;
    color: #000000;
    border-style: solid;
    border-radius: 0px;
}
</style>