<template>
    <!-- <ul>
        <li v-for="user in users" :key="user.id">
           <h5>hola mundo</h5>
        </li>
    </ul> -->
    <slot v-for="user in users"
             :user="user"
             :key="user.id"
             class="list-items"
             ></slot>
</template>
<script>
export default{
    props: {
        users:{
            typeof: Array,
            required: true
        }
    }
}
</script>
<style>
.list-items{
    display: flex;
    flex-direction: row;
    }
</style>