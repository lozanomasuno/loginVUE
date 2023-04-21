import { createStore } from 'vuex'
import {v4 as uuIdv4} from 'uuid'

export default createStore({
  state: {
    todos: [
      { id: 1, text: 'recolectar las piedras del infinito', completed: false},
      { id: 2, text: 'Piedra del alma', completed: true},
      { id: 3, text: 'Piedra de poder', completed: true},
      { id: 4, text: 'Piedra de realidad', completed: false},
      { id: 5, text: 'Conseguir  nuevos secuaces competentes', completed: false},
    ]
  },
  getters: {
    pendingTodos(state , getters, rootState){
      return state.todos.filter( todo => !todo.completed )
    },
    allTodos: (state , getters, rootState)=>{
      return state.todos
    },
    conpleteTodos: (state , getters, rootState)=>{
      return state.todos.filter(todos => todos.completed )
    },
    getTodosByTab: ( _ , getters) => (tab) =>{
      switch (tab) {
        case 'all': return getters.allTodos
        case 'pending': return getters.pendingTodos
        case 'completed': return getters.conpleteTodos
      }
    }
  },
  mutations: {
    toggleTodo(state, id){
      const todoIdx = state.todos.findIndex(todo=> todo.id === id)
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed  
    },
    createTodo(state, text='' ){
      if(text.length <=1) return
      state.todos.push({
        id:uuIdv4(),
        completed: false,
        text
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
