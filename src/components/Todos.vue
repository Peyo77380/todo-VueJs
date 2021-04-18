<template>
    <section class="todoapp">
        <header class="header">
            <h1>Todobeedoo</h1>
            <input class="new-todo" type="text" placeholder="Add a new task" v-model="newTodo" @keyup.enter="addTodo">
        </header>
        <div class="main">
          <input type="checkbox" v-model="allDone">
          <ul class="todo-list">
            <li v-for="todo in filteredTodos" v-bind:key="todo" class="todo"  v-bind:class="{ completed: todo.completed }">
              <div class="view">
                <input type="checkbox" class="toggle" v-model="todo.completed">
                <label>
                  {{ todo.name }}
                </label>
                <button class="destroy" @click.prevent="deleteTodo(todo)"></button>
              </div>
            </li>
          </ul>
        </div>
        <footer class="footer" v-show="todos.length > 0">
          <span class="todo-count">
            <strong>{{remaining}}</strong> task<span v-show="remaining > 1">s</span> remaining
          </span>
          <ul class="filters">
            <li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">All</a></li>
            <li><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">To do</a></li>
            <li><a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Done</a></li>
          </ul>
          <button class="clear-completed" @click="deleteCompleted" v-show="completed">Delete done</button>
        </footer>
    </section>
</template>

<script>

export default ({
  data () {
    return {
      todos: [{
        name: 'Test',
        completed: false
      }, {
        name: 'Test 2',
        completed: true
      }],
      newTodo: '',
      filter: 'all'
    }
  },
  methods: {
    addTodo () {
      this.todos.push({
        name: this.newTodo,
        completed: false
      })
      this.newTodo = ''
    },
    deleteTodo (todo) {
      this.todos = this.todos.filter(i => i !== todo)
    },
    deleteCompleted () {
      this.todos = this.todos.filter(todo => todo.completed === false)
    }
  },
  computed: {
    allDone: {
      set (value) {
        this.todos.forEach(todo => {
          todo.completed = value
        })
      },
      get () {
        return this.remaining === 0
      }
    },
    completed () {
      return this.todos.some(todo => todo.completed)
    },
    remaining () {
      return this.todos.filter(todo => !todo.completed).length
    },
    filteredTodos () {
      if (this.filter === 'todo') {
        return this.todos.filter(todo => !todo.completed)
      } else if (this.filter === 'done') {
        return this.todos.filter(todo => todo.completed)
      }
      return this.todos
    }
  }
})
</script>

<style src="./todos.css"></style>
