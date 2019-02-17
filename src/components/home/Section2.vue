<template>
<section class="map">
  <div class="container">
    <div class="row">
      <Info @location="Setlocation"></Info>
      <Map :location="location"></Map>
    </div>
  </div>
</section>
</template>

<script>
import Info from './offices/Info';
import Map from './offices/Map';

export default {
  name: 'Section2',
  data() {
    return {
      location: {
        lat: 50.4500644,
        lng: 30.5241037,
      },
    };
  },
  methods: {
    Setlocation(obj) {
      this.location = obj;
    },
  },
  components: {
    Map,
    Info,
  },
};
</script>

<style scoped lang="sass">
.map
  background-color: #262626
</style>
