<template>
  <div class="home">
    <Section1></Section1>
    <Section2></Section2>
    <Section3></Section3>
  </div>
</template>

<script>
import Section1 from './home/Section1';
import Section2 from './home/Section2';
import Section3 from "./home/Section3";

export default {
  name: 'Home',
  components: {
    Section3,
    Section1,
    Section2,
  },
};
</script>

<style scoped lang="sass">

</style>
