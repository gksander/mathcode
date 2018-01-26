<template>
  <div>
    <nav class='navbar is-fixed-top is-dark'>
      <div class='navbar-brand'>
        <nuxt-link to='/' class='navbar-item' exact>
          <img src="~/assets/img/logo.svg" />&nbsp;
          <span>
            Home
          </span>
        </nuxt-link>
        <a class="navbar-item" @click="$store.commit('toggleEditor')">
          {{editorShown ? 'Hide' : 'Show'}} Editor
        </a>
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

    <!-- Sidebar -->
    <div id="sidebar" :class="{'editorShown': editorShown}">
      <div id="editor" ref="editor" style="width:100%; height:50%"></div>

      <div id="output">
        <div class="tabs is-fullwidth">
          <ul>
            <li :class="{'is-active':mode=='default'}" @click="mode='default'">
              <a>Default</a>
            </li>
            <li :class="{'is-active':mode=='saved'}" @click="mode='saved'">
              <a>Saved</a>
            </li>
            <li @click="runCode()"><a>Run</a></li>
          </ul>
        </div>

        <div v-for="(out,i) in output" :key="i" class="output-line">
          <span>[{{i+1}}]</span>&nbsp;<span v-html="out"></span>
        </div>

      </div>
    </div>

    <!-- Content -->
    <div id="content" :class="{'editorShown': editorShown}">
      <section class="section">
        <div class="content">
          <nuxt/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  // Export object
  export default {
    data() {
      return {
        // Editor stuff
        editor: Object,
        output: [],
        mode: 'default',

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
          }
        ]
      }
    },

    computed: {
      editorShown() {
        return this.$store.state.editorShown;
      },
      defaultCode() {
        return this.$store.state.defaultCode;
      }
    },

    watch: {
      defaultCode(newCode, oldCode) {
        try {
          this.editor.setValue(newCode, -1);
          this.runCode();
        } catch(e) {console.log(e);}
      }
    },


    methods: {
      /* Method for running code */
      runCode() {
        // NEED TO RUN SOME SANITIZING
        let that = this;
        that.output = [];
        // Functions to use in run method
        function print(line) {
          that.output.push(line.toString());
        }


        try {
          // Get editor text
          let evalString = this.editor.getValue();

          /*
          ** Handle saving code to local storage
          */
          // If not default code...
          // if (evalString != this.defaultCode) {
          //   this.savedCode = evalString;
          //   // If in default mode, change to saved mode
          //   if (this.mode == "default") {
          //     this.changeMode('saved');
          //   }
          //   // Try to save the code to localStorage
          //   if(this.eID) {
          //     try {
          //       localStorage.setItem(`cosma/${this.eID}`, this.savedCode);
          //     } catch(e) {}
          //   } 
          // }


          evalString = Babel.transform(evalString, {presets: ['es2015']}).code;
          eval(evalString);
        } catch(e){
          that.output.push(`<span style='color:red'>${e}</span>`);
        }
      }
    },



    mounted() {
      let created = false;
      let int = setInterval(() => {
        try {
          this.editor = ace.edit(this.$refs.editor);
          this.editor.setTheme("ace/theme/solarized_light");
          this.editor.session.setMode("ace/mode/javascript");
          this.editor.getSession().setTabSize(2);
          this.$refs.editor.style.fontSize = "16px";
          this.editor.$blockScrolling = Infinity;

          this.editor.commands.addCommand({
            name: 'run',
            bindKey: {win: "Ctrl-Enter", mac: "Command-Enter"},
            exec: editor => {
              this.runCode();
            }
          })

          created = true;
          this.run();
        } catch(e) {}
        if (created) {
          clearInterval(int);
        }
      }, 200);
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
    // overflow-y: hidden
  
  .content
    p.title
      margin-bottom: 8px !important
      border-bottom: 2px solid $grey-dark
  
  // Variables for layout
  $sb-width: 450px
  $header-height: 48.75px
  $breakwidth: $sb-width + 250px

  #sidebar
    position: fixed
    top: $header-height
    bottom: 0
    right: -$sb-width - 40px
    width: $sb-width
    max-width: 85%
    z-index: 2
    background-color: white
    &.editorShown
      right: 0px

  #content
    z-index: -4
    margin-top: $header-height
    &.editorShown
      // right: $sb-width
      margin-right: $sb-width

  // Responsiveness
  @media screen and (max-width: $breakwidth)
    #sidebar
      // background-color: blue
    #content
      margin-right: 0px
      &.editorShown
        margin-right: 0px

</style>