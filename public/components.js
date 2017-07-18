Vue.filter('done', function(todo) {
      return todo.done ? todo : null;
})


Vue.component('todo-item', {
    template: '#bleh',
    props: ['title']
})

new Vue({
    el: '#to-do-list',
    data: {
      todoFilterKey: 'all',
      todo: {
          'value': '',
          'done': true,
          '_id': ''
      },
      todos: [],
    },
    created(){
      this.getToDos()
    },
    computed: {
  	   todoFilter() {
    	    return this[this.todoFilterKey]
        },
        all() {
          return this.todos
        },
        done() {
          return this.todos.filter((todo) => todo.done)
        },
        notDone() {
    	     return this.todos.filter((todo) => !todo.done)
         }
    },
    methods: {
        getToDos: function() {
          this.$http.get('http://127.0.0.1:3000/todo').then(function(response) {
            this.todos = response.body
          });
      },
        addNewTodo: function() {
            var val = this.todo.value
            this.$http.post('http://127.0.0.1:3000/todo', {"value": val}).then (function(response) {
              this.todos.push({value: val, done: false});
              this.getToDos()
            });
            this.todo.value = null
        },
        deleteTodo: function(todo, index) {
          var id = todo['_id'];
          this.$http.delete('http://127.0.0.1:3000/todo', {body: {'id': id}}).then(function(r){
              this.todos.splice(index, 1)
          })
        },
        putTodo: function(todo) {
          var value = todo.value;
          var done = todo.done;
          var id = todo['_id']
          console.log(value, done, !done, id);
          this.$http.put('http://127.0.0.1:3000/todo', {'value': value, 'done': !done, 'id': id}).then(function(){
              this.getToDos()
          })
        },
        filterTodos: function(todos) {
          return todos.filter(function(todo) {
            return todo.done ? todo : null
          })
        }
    }

})
