Vue.component('todo-item', {
    template: '#bleh', //require('template.html'),
    props: ['todo']
})


new Vue({
  el: '#app',
  data: {
    items: [],
  },
  created() {
    this.getToDos()
  },
  methods: {
    getToDos: function () {
      this.$http.get('http://127.0.0.1:3000/todo').then(function (response) {
      this.data = response.data
    });
    }
  }
})
