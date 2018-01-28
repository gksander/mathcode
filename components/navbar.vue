<template>
	<nav class='navbar is-fixed-top is-dark'>
    <div class='navbar-brand'>
      <nuxt-link to='/' class='navbar-item' exact>
        <img src="~/assets/img/logo.svg" />&nbsp;
        <span>
          Home
        </span>
      </nuxt-link>
      <a class="navbar-item" @click="$store.commit('toggleEditor')" v-html="editorShown ? 'Hide Editor' : 'Show Editor'"></a>
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
          <div class="navbar-dropdown">
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
</template>

<script>
	export default {
		data () {
			return {
				// Menu stuff
        menu: false,
        items: [
          {
            title: "JavaScript",
            items: [
              {title: "Basics", href: "/js/basics"},
              {title: "Data Types", href: "/js/data-types"},
              {title: "Operators and Methods", href: "/js/operators"},
              {title: "Functions", href: "/js/functions"},
              {title: "Logic and Flow", href: "/js/logic-flow"},
              {title: "Loops", href: "/js/loops"},
            ]
          },
          {
            title: "Level 1",
            items: [
              {title: "Even and Odd", href: "/lvl-1/even-odd"}
            ]
          }
        ]
			}
		},

		computed: {
			editorShown() {
				return this.$store.state.editorShown;
			}
		}
	}
</script>