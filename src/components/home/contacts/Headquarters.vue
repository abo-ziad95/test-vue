<template>
<div class="Headquarters">
  <div class="title">
    <span>GMS</span> Headquarters
  </div>
  <div class="row">
    <div class="desc">
      <div class="desc-txt">
      <span>Global Message Services Ukraine LLC</span>
      <span>Bundesstrasse 5 | 3rd Floor</span>
      <span>6300 Zug</span>
      <span>Switzerland</span>
      </div>
      <div class="desc-phone">
        +41 41 544 62 00
      </div>
    </div>
    <div class="links-wrap">
      <div class="link-item">
        <div class="link-txt">Email</div>
        <a href="#" class="link">info@gms-worldwide.com</a>
      </div>
      <div class="link-item">
        <div class="link-txt">
          Send message
        </div>
        <a href="#" class="link">Viber us</a>
      </div>
      <div class="link-item">
        <div class="link-txt">Send form</div>
        <a href="" class="link">Contact us</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: "Headquarters"
  }
</script>

<style scoped lang="sass">
.Headquarters
  max-width: 515px
  width: 100%
.title
  font-size: 34px
  font-family: SuisseIntl-Light, sans-serif
  margin: 0 0 43px
  span
    color: #3db565
.desc
  &-txt
    max-width: 292px
    width: 100%
    font-family: SuisseIntl-Light, sans-serif
    line-height: 1.87
    font-size: 15px
    color: #333
    span
      display: block
  &-phone
    color: #3db565
    font-family: SuisseIntl-Light, sans-serif
    font-size: 26px
    margin: 25px 0 0 0
.link
  font-size: 14px
  color: #3db565
  letter-spacing: .7px
  text-transform: uppercase
  display: block
  line-height: 1.87
  font-family: SuisseIntl-SemiBold, sans-serif
  &-txt
    color: #333
    font-size: 15px
    line-height: 1.87
    font-family: SuisseIntl-Light, sans-serif
</style>
