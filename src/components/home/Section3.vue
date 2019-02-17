<template>
<div class="contactUs">
  <div class="container">
    <div class="contactUs-title">
      Contact Us
    </div>
    <div class="row">
    <form class="contactUs-form">
      <div class="input-wrap">
        <input
            type="text"
            id="name"
            v-validate="'required|max:50'"
            class="input"
            name="name"
            :class="{invalid: errors.has('name')}"
            v-model="name">
        <label for="name" class="label" :class="{invalid: errors.has('name')}">
          Name
        </label>
        <span class="validate-error" v-if="errors.has('name')">{{errors.first('name')}}</span>
      </div>
      <div class="input-wrap">
        <input
            type="text"
            id="phone"
            v-validate="'required|numeric'"
            class="input"
            name="phone"
            :class="{invalid: errors.has('phone')}"
            v-model="phone">
        <label for="phone" class="label" :class="{invalid: errors.has('phone')}">
          Phone
        </label>
        <span class="validate-error" v-if="errors.has('phone')">{{errors.first('phone')}}</span>
      </div>
      <div class="input-wrap">
        <input
            type="text"
            id="email"
            class="input"
            name="email"
            :class="{invalid: errors.has('email')}"
            v-validate="'required|email'"
            v-model="email">
        <label for="email" class="label" :class="{invalid: errors.has('email')}">
          E-mail
        </label>
        <span class="validate-error" v-if="errors.has('email')">{{errors.first('email')}}</span>
      </div>
      <label class="checkbox-wrapper" for="terms">
        <span class="checkbox-wrap">
          <input type="checkbox" class="checkbox" id="terms" v-model="terms">
          <img src="../../assets/shape.png" alt="#">
        </span>
        <span class="check-text">I agree the processing of personal data</span>
      </label>
      <button
          class="btn"
          @click="sendData"
          :disabled="errors.any() || !isComplete"
          type="submit">
        Get in touch
      </button>
    </form>
    <div class="contactUs-txt">
      Please tell us more about your request and give us info about your company and country
    </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Section3',
  data() {
    return {
      name: null,
      email: null,
      phone: null,
      terms: true,
    };
  },
  methods: {
    ...mapActions([
      'sendForm',
    ]),
    sendData(e) {
      e.preventDefault();
      this.sendForm(this._data);
    },
  },
  computed: {
    isComplete() {
      return this.name && this.email && this.phone && this.terms;
    },
  },
};
</script>

<style scoped lang="sass">
.contactUs
  background: url("../../assets/bg.jpg") no-repeat center
  background-size: cover
  padding: 100px 0
  &-title
    color: #fff
    font-family: SuisseIntl-Light, sans-serif
    margin: 0 0 50px
    font-size: 34px
  &-form
    max-width: 540px
    width: 100%
.input
  color: #fff
  background-color: transparent
  border: none
  border-bottom: 1px solid #000
  width: 100%
  font-size: 18px
  padding: 0 0 20px 100px
  font-family: SuisseIntl-Light, sans-serif
  outline: none
  transition: all .5s linear
  &:focus
    border-bottom: 1px solid #fff
    & + label
      color: #fff
  &.invalid
    border-bottom: 1px solid red
  &-wrap
    position: relative
    margin: 0 0 30px 0
    &:nth-child(3)
      margin: 0 0 20px 0
.label
  position: absolute
  top: 0
  left: 0
  color: #000
  font-family: SuisseIntl-Light, sans-serif
  font-size: 18px
  transition: color .5s linear
  &.invalid
    color: red
.checkbox-wrapper
  display: flex
  align-self: center
  margin: 0 0 40px 0
  cursor: pointer
  max-width: 335px
.check-text
  padding: 0 0 0 10px
  color: #fff
  font-family: SuisseIntl-Light, sans-serif
  font-size: 18px
.checkbox
  opacity: 0
  position: absolute
  left: 0
  top: 0
  width: 100%
  height: 100%

.checkbox-label
  display: flex
  align-items: center

.checkbox-wrap img
  opacity: 0
.checkbox:checked ~ img
  opacity: 1

.checkbox-wrap
  position: relative
  border: none
  background-color: #fff
  width: 16px
  height: 16px
  display: flex
  align-items: center
  justify-content: center
.btn
  color: #fff
  font-size: 11px
  font-family: SuisseIntl-SemiBold, sans-serif
  background-color: #000
  padding: 36px 90px
  outline: none
  border: none
  letter-spacing: 1.5px
  transition: all .5s linear
  &:disabled
    cursor: default;
    background-color: rgba(0, 0, 0, .5);
    color: rgba(255, 255, 255, .5)
.contactUs-txt
  color: #000
  max-width: 518px
  width: 100%
  font-family: SuisseIntl-Light, sans-serif
  line-height: 1.89
.validate-error
  color: red
  font-size: 14px
  font-family: SuisseIntl-Light, sans-serif
  position: absolute
  bottom: -15px
  display: inline-block
  left: 0
  width: 100%
  text-align: center
</style>
