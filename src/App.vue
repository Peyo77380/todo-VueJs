<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Todos from './components/Todos'

export default {
  name: 'App',
  components: { Todos }
}
</script>

<style>
</style>
