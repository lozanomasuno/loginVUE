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
    <button @click="openModalTodo">Crear Todo</button>

    <!--Modal-->
    <Modal v-if="isOpen"
           title="Add A todo"
           @on:close="closeModalTodo"
    >
        <template v-slot:header>
            <h1>Crea un nuevo Todo</h1>
        </template>
        <template v-slot:body>
            <input type="text" placeholder="id">
            <input type="text" placeholder="content">
            <input type="checkbox" placeholder="Enabled">

        </template>
        <template v-slot:footer>    
            <button @click="closeModalTodo">Salir</button>
        </template>

        <template v-slot:exposed="{ newTitle } ">
            <h2>{{ newTitle }}</h2>
        </template>
    </Modal>
</template>
<script>
import useTodos from "../composables/useTodos";
import Modal from "../components/Modal.vue"
export default {
    components: { Modal },
    
    setup(){

       const { pending, currenTab,  getTodosByTab, toggleTodo, createTodo, isOpen, openModal, closeModal  } = useTodos()
       
       return{
        pending,
        currenTab,
        getTodosByTab,
        toggleTodo,
        isOpen,
        openModal,
        closeModal
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
</style>