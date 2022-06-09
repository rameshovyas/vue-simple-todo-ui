let id = 0;

const app = Vue.createApp({
    data() {
        return {
          newTodo: '',
          todos :[
              {id: ++id, text: 'Try new app in Vue',done:true},
              {id: ++id, text: 'Learn Actix Web',done:true},
              {id: ++id, text: 'Learn Rust Programming',done:false},
              {id: ++id, text: 'Learn Sanskrit',done:false},
              {id: ++id, text: 'Learn Vedas',done:false},              
          ]

        }
    },
    methods: {
        addTodo() {
            this.todos.push({id: ++id, text: this.newTodo,done:false})
            this.newTodo='';
        },

        removeTodo(todo) {
            this.todos = this.todos.filter((t)=> t!=todo)
        }
    }
})


app.mount('#app')