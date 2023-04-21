import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {
    const store = useStore()
    const currenTab = ref('all')
    const isOpen = ref(false)
    return {
        currenTab,
        pending: computed(()=> store.getters['pendingTodos']),
        all: computed(()=> store.getters['allTodos']),
        completed: computed(()=> store.getters['completedTodos']),
        getTodosByTab: computed(()=> store.getters['getTodosByTab'](currenTab.value)), 

        // Methods
        toggleTodo:(id) => store.commit('toggleTodo', id),

        openModalTodo  : ()=> isOpen.value = true,
        closeModalTodo : ()=> isOpen.value = false,
     }
}

export default useTodos