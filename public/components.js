Vue.component('todo-item', {
    template: '#bleh',
    props: ['title']
})

new Vue({
    el: '#to-do-list',
    data: {
        todo: {
          /*'id': todos.length(),*/
          'value': '',
          'done': true
        },
        todos: [
            {'id': 1,
            'value': 'wake up',
            'done': true},
            {'id': 2,
            'value':'take Gapcio for a walk',
            'done': true},
            {'id': 3,
            'value': 'program',
            'done': true},
            {'id': 4,
            'value': 'go to sleep',
            'done': true}
        ]
    },
    created(){
      this.getToDos()
      console.log(this.data)
    },
    methods: {
        getToDos: function() {
          this.$http.get('http://127.0.0.1:3000/todo').then(function(response) {
            console.log(response.body)
            this.data = response.body
          });
      },
        addNewTodo: function() {
            var val = this.todo.value
            this.$http.post('http://127.0.0.1:3000/todo', {"value": val}).then (function(response) {
              console.log (response.body);
            });
            //this.todos.push({value: val, done: false})
            this.todo.value = null
        }
    }
})


/*
new Vue ({
  el: '#app',
  data: {
    todos: {
      value: '',
      done: true
    },
  },
  created(){
    this.getToDos()
    console.log(this.data)
  },
  methods: {
    getToDos: function() {
      this.$http.get('http://127.0.0.1:3000/todo').then(function(response) {
        console.log(response.body)
      this.data = response.body
    });
    }
  }
})



Vue.component('todo-item', {
    template: '#bleh',
    props: ['todo']
})


new Vue({
  el: '#app',
  data: {
    todo: {
      'value': '',
      'done': false
    },
  },
  created() {
    this.getToDos()
  },
  methods: {
    getToDos: function () {
      this.$http.get('http://127.0.0.1:3000/todo').then(function (response) {
      this.data = response.data
    });
    postToDo: function () {
      this.$http.post('http://127.0.0.1:3000/todo', {"vaue": todo.value, "done": true})
    }
    }
  }
})


this.$http.post('http://demo8159500.mockable.io/post/check', {
              domain: this.domain
            }, function (data, status, request) {
                this.postResults = data;
*/
