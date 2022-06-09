let id = 0;

const app = Vue.createApp({
    data() {
        return {
          newTodo: '',
          todos :[
              {id: ++id, text: 'Try new app in Vue'},
              {id: ++id, text: 'Learn Actix Web'}
          ]

        }
    },
    methods: {
        addTodo() {
            this.todos.push({id: ++id, text: this.newTodo})
            this.newTodo='';
        },

        removeTodo(todo) {
            this.todos = this.todos.filter((t)=> t!=todo)
        }
    }
})


app.mount('#app')