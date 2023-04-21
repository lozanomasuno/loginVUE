import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {
    const store = useStore()
    const currenTab = ref('all')
    return {
        currenTab,
        pending: computed(()=> store.getters['pendingTodos']),
        all: computed(()=> store.getters['allTodos']),
        completed: computed(()=> store.getters['completedTodos']),
        getTodosByTab: computed(()=> store.getters['getTodosByTab'](currenTab.value)), 

        // Methods
        toggleTodo:(id) => store.commit('toggleTodo', id),
        createTodo:(text)=> store.commit('createTodo', text)
     }
}

export default useTodos