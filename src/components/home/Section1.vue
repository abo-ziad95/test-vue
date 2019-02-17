<template>
  <section class="contacts">
    <div class="container">
      <div class="title">
        Contacts
      </div>
      <div class="row">
        <Headquarters></Headquarters>
        <Support></Support>
      </div>
    </div>
  </section>
</template>

<script>
  import Headquarters from "./contacts/Headquarters";
  import Support from "./contacts/Support";
  export default {
    name: "Section1",
    components: {Support, Headquarters}
  }
</script>

<style scoped lang="sass">
.contacts
  background-color: #fff
  padding: 60px 0 100px 0
.title
  font-family: SuisseIntl-Light, sans-serif
  margin: 0 0 45px
  font-size: 50px
</style>
