Vue.component('todo-item', {
    template: '#bleh',
    props: ['title']
})

new Vue({
    el: '#to-do-list',
    data: {
        todo: {
          'value': '',
          'done': true
        },
        todos: []
    },
    created(){
      this.getToDos()
    },
    methods: {
        getToDos: function() {
          this.$http.get('http://127.0.0.1:3000/todo').then(function(response) {
            console.log(response.body)
            this.todos = response.body
          });
      },
        addNewTodo: function() {
            var val = this.todo.value
            this.$http.post('http://127.0.0.1:3000/todo', {"value": val}).then (function(response) {
              console.log(response.body);
              this.todos.push({value: val, done: false});
              this.getToDos()
            });
            this.todo.value = null
        }
    }
})
