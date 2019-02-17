<template>
  <div class="offices">
    <div class="offices-title">
      Our Offices
    </div>
    <div class="offices-buttons">
      <button
          class="btn"
          @click="changeLocation('KY')"
          :class="{active: activeBtn === 'KY'}">KYIV</button>
      <button
          class="btn"
          @click="changeLocation('NY')"
          :class="{active: activeBtn === 'NY'}">NEW YORK</button>
      <button
          class="btn"
          @click="changeLocation('GN')"
          :class="{active: activeBtn === 'GN'}">GUANGZHOU</button>
      <button
          class="btn"
          @click="changeLocation('BR')"
          :class="{active: activeBtn === 'BR'}">BARCELONA</button>
    </div>
    <div class="offices-desc">
      <div class="offices-desc-title">
        {{office.title}}
      </div>
      <div class="offices-desc-info">
        <span>{{office.address}}</span>
        <span>{{office.zip}}</span>
        <span>{{office.country}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data() {
    return {
      activeBtn: 'KY',
      location: {
        lat: 50.4500644,
        lng: 30.5241037,
      },
      office: {
        title: 'Global Message Services Ukraine LLC',
        address: 'Kuiv, Stepan Bandera, 33',
        zip: '02066',
        country: 'Ukraine',
      },
    };
  },
  methods: {
    changeLocation(city) {
      this.activeBtn = city;
      if (city === 'KY') {
        this.$emit('location', {
          lat: 50.4500644,
          lng: 30.5241037,
        });
        this.office = {
          title: 'Global Message Services Ukraine LLC',
          address: 'Kuiv, Stepan Bandera, 33',
          zip: '02066',
          country: 'Ukraine',
        };
      } else if (city === 'NY') {
        this.$emit('location', {
          lat: 40.72378692,
          lng: -74.0301919,
        });
        this.office = {
          title: 'Global Message Services USA LLC',
          address: 'New York, Same Address, 33',
          zip: '11111',
          country: 'USA',
        };
      } else if (city === 'GN') {
        this.$emit('location', {
          lat: 23.1301964,
          lng: 113.2592945,
        });
        this.office = {
          title: 'Global Message Services China LLC',
          address: 'GUANGZHOU, Same Address, 33',
          zip: '22222',
          country: 'China',
        };
      } else if (city === 'BR') {
        this.$emit('location', {
          lat: 41.39664244,
          lng: 2.14533806,
        });
        this.office = {
          title: 'Global Message Services Spain LLC',
          address: 'Barcelona, Same Address, 33',
          zip: '33333',
          country: 'Spain',
        };
      }
    },
  },
};
</script>

<style scoped lang="sass">
.offices
  padding: 100px 0 150px 0
  max-width: 580px
  width: 100%
  &-title
    color: #fff
    font-size: 34px
    font-family: SuisseIntl-Light, sans-serif
    margin: 0 0 50px 0
  &-buttons
    display: flex
    justify-content: space-between
    max-width: 330px
    width: 100%
    margin: 0 0 40px 0
  &-desc-title
    color: #fff
    font-family: SuisseIntl-Light, sans-serif
    font-size: 26px
    margin: 0 0 30px
  &-desc-info
    color: #fff
    font-size: 11px
    letter-spacing: .3px
    font-family: SuisseIntl-Light, sans-serif
    line-height: 1.8
    span
      display: block
.btn
  color: #fff
  font-family: SuisseIntl-SemiBold, sans-serif
  letter-spacing: 1.5px
  cursor: pointer
  padding: 0
  font-size: 11px
  background-color: transparent
  border: none
  outline: none
  transition: color .5s linear
  &.active
    color: #3db565
</style>
