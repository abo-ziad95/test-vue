<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
    };
  },
  methods: {

  },
};
</script>

<style lang="sass">
  @import "./styles/reset.css"
  @import "./styles/fonts.css"
  .container
    max-width: 1160px
    width: 100%
    margin: 0 auto
    border: 1px solid red
  .row
    display: flex
    justify-content: space-between
</style>
