<template>
  <div>
    <nav class='navbar is-transparent {$navClass}'>
      <div class='navbar-brand'>
        <nuxt-link to='/' class='navbar-item' exact>
          <img src="~/assets/img/logo.svg" />&nbsp;
          <span>
            Home
          </span>
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/about">
          About
        </nuxt-link>
        <span class='navbar-burger' @click='menu=!menu' :class="{'is-active':menu}">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div class='navbar-menu' :class="{'is-active':menu}">
        <div class='navbar-start'>
          <div class="navbar-item has-dropdown is-hoverable" v-for="item in items" :key="item.index">
            <a class="navbar-link"> {{ item.title }}</a>
            <div class="navbar-dropdown is-boxed">
              <nuxt-link 
                class="navbar-item"
                v-for="subItem in item.items"
                :key="subItem.index"
                :to="subItem.href"
                router-link-active="is-active"
              >
                {{subItem.title}}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- Body -->
    <nuxt/>
  </div>
</template>

<script>
  // Export object
  export default {
    data() {
      return {
        menu: false,
        items: [
          {
            title: "Intro",
            items: [
              {title: "What is coding?", href: "/intro/what-is-coding"},
              {title: "Variables", href: "/intro/variables"},
              {title: "Functions", href: "/intro/functions"},
              {title: "Math Capabilities", href: "/intro/math"},
              {title: "Intro Activities", href: "/intro/activities"}
            ]
          },
          {
            title: "JavaScript",
            items: [
              {title: "Basics", href: "/js/basics"},
              {title: "Data Types", href: "/js/data-types"},
              {title: "Functions", href: "/js/functions"},
              {title: "Logic and Flow", href: "/js/logic-flow"},
              {title: "Loops", href: "/js/loops"},
            ]
          }
        ]
      }
    }
  }
</script>


<!-- GLOBAL STYLES -->
<style lang="sass">
  @import "../node_modules/bulma/sass/utilities/initial-variables"
  @import "../node_modules/bulma/sass/utilities/functions"

  $primary: #5d3f9e
  $blue: $primary

  @import "../node_modules/bulma/bulma"
  @import "../node_modules/bulma/sass/components/navbar.sass"
  
  body, html
    font-family: 'Merriweather', serif
    font-size: 15px

  .editor
    width: 100%
    height: 100%

  .editor-box
      margin-top: 10px
      max-width: 950px
  // Badges
  @mixin badge($size)
      background-color: rgba(255,255,255, 1)
      width: $size
      height: $size
      overflow-x: visible
      display: flex
      align-items: center
      justify-content: center
      margin: auto
      border-radius: 100%
      border: 1px solid rgb(220,220,220)
      box-shadow: 0px 0px 8px black
      img
          width: 88%
  .home-badge
      @include badge(150px)
      margin-bottom: 20px
  .banner-badge
      @include badge(120px)
      margin-bottom: 8px

  .editor-output
    .output-line
      span:first-child
        color: $primary


  .full-background
      position: fixed
      top: 0
      left: 0
      width: 100vw
      height: 100vh
      z-index: -5
      display: flex
      align-items: center
      justify-content: center

  #particles-js
      position: absolute
      width: 100%
      height: 100%
      left: 0
      top: 0
      background: radial-gradient(circle, $primary 50%, darken($primary,10%), darken($primary,15%))

  .content
      p.title
          margin-bottom: 8px !important
          border-bottom: 2px solid $grey-dark

</style>