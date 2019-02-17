<template>
  <div>
    <gmap-map
        :center="position"
        :zoom="zoom"
        :options="mapStyle"
        style="width:630px;  height: 500px;"
    >
      <gmap-marker
          :icon="{ url: require('../../../assets/ellipse.png')}"
          :position="position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  props: [
    'location',
  ],
  data() {
    return {
      zoom: 13,
      position: {
        lat: 50.4500644,
        lng: 30.5241037,
      },
      mapStyle: null,
    };
  },
  watch: {
    location(obj) {
      this.zoom = 10;
      setTimeout(() => {
        this.position = obj;
      }, 500);
      setTimeout(() => {
        this.zoom = 13;
      }, 1000);
    },
  },
  mounted() {
    this.mapStyle = this.$store.getters.mapStyles;
  },
};
</script>
