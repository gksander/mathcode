<template>
  <div>
    <navbar></navbar>
    <!-- Sidebar -->
    <div id="sidebar" :class="{'editorShown': editorShown}">
      <div class="tabs is-fullwidth" style="margin-bottom:0px">
        <ul>
          <li :class="{'is-active':mode=='default'}" @click="changeMode('default')">
            <a>Default</a>
          </li>
          <li :class="{'is-active':mode=='saved'}" @click="changeMode('saved')">
            <a>Saved</a>
          </li>
          <li @click="runCode()"><a>Run</a></li>
        </ul>
      </div>
      <div id="editor" ref="editor" style="width:100%; height:50%"></div>

      <div id="output">
        <p class="title is-4 outputTitle">Output</p>
        <div v-for="(out,i) in output" :key="i" class="output-line">
          <span>[{{i+1}}]</span>&nbsp;<span v-html="out"></span>
        </div>

      </div>
    </div>

    <!-- Content -->
    <div id="content" :class="{'editorShown': editorShown}">

      <section class="hero is-primary" style="position:relative;">
        <div id="particles-js" style="position:absolute; left:0; right:0; top:0; bottom:0"></div>
        <div class="hero-body">
          <!-- <div class="container"> -->
            <div class="columns is-vcentered">
              <div class="column is-8">
                <p class="title" v-html="title"></p>
                <p class="subtitle">COSma Coding</p>
              </div>
              <div class="column has-text-centered">
                <div class="banner-badge">
                  <img src="~/assets/img/logo.svg" alt="Logo" width="50px">
                </div>
                <p class="title is-5">COSma Learning</p>
              </div>
            </div>
          <!-- </div> -->
        </div>
      </section>

      <section class="section">
        <div class="content">
          <nuxt/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import navbar from '~/components/navbar.vue';

  // Export object
  export default {
    components: {navbar},

    data() {
      return {
        // Editor stuff
        editor: Object,
        output: [],
        mode: 'default',
        // savedCode: "",
      }
    },

    computed: {
      editorShown() {
        return this.$store.state.editorShown;
      },
      eID () {
        return this.$store.state.eID;
      },

      defaultCode() {
        return this.$store.state.defaultCode;
      },
      savedCode() {
        return this.$store.state.store_savedCode;
      },

      count() {
        return this.$store.state.count;
      },
      title() {
        return this.$store.state.title
      }
    },

    watch: {
      // When button is clicked
      count(newCount, oldCount) {
        try {
          // Change saved code.
          // let sc = localStorage.getItem(`cosma/${this.eID}`);
          // if (sc !== null) {
          //   this.savedCode = sc;
          // } else {
          //   this.savedCode = "";
          // }

          // Change editor to default, set code to default code.
          this.mode = 'default';
          this.editor.setValue(this.$store.state.defaultCode, -1);
          this.$store.commit('showEditor');
          this.runCode();


        } catch(e) {}
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
          if (evalString != this.defaultCode) {
            // this.savedCode = evalString;
            if(this.eID) {
              try {
                localStorage.setItem(`cosma/${this.eID}`, evalString);
              } catch(e) {}
            } else {
              localStorage.setItem(`cosma/default`, evalString);
            }
            this.$store.commit('pullSavedCode');
            
            // If in default mode, change to saved mode
            if (this.mode == "default") {
              this.changeMode('saved');
            }
            // Try to save the code to localStorage
            
          }

          evalString = Babel.transform(evalString, {presets: ['es2015']}).code;
          eval(evalString);
        } catch(e){
          that.output.push(`<span style='color:red'>${e}</span>`);
        }
      },

      changeMode(mode) {
        if (mode == 'default') {
          this.mode = "default";
          this.editor.setValue(this.defaultCode, -1);
        } else {
          this.mode = "saved";
          this.editor.setValue(this.savedCode, -1);
        }
      }
    },



    mounted() {
      this.$store.commit('pullSavedCode');

      let created = false;
      let int = setInterval(() => {
        try {
          this.editor = ace.edit(this.$refs.editor);
          this.editor.setTheme("ace/theme/ambiance");
          // this.editor.setTheme("ace/theme/cobalt");
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

      particleBackground();
    }

  }
</script>




<!-- GLOBAL STYLES -->
<style lang="sass">
  @import "../node_modules/bulma/sass/utilities/initial-variables"
  @import "../node_modules/bulma/sass/utilities/functions"

  $primary: #5d3f9e
  $blue: $primary
  $tabs-border-bottom-width: 3px

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
    .activities-title
      background-color: $primary
      padding: 20px
      color: white
      font-size: 2.3em
      margin-left: -25px
      padding-left: 25px
  
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
    overflow-y: auto
    background-color: white
    transition: right 500ms
    &.editorShown
      right: 0px
    .output-line
      padding-left: 8px
      span:first-child
        color: $primary
    .outputTitle
      text-align: center
      border-bottom: 2px solid $grey-dark
      margin-bottom: 10px
      margin-top: 8px

  #content
    z-index: -4
    margin-top: $header-height
    transition: margin-right 500ms
    &.editorShown
      margin-right: $sb-width

  // Responsiveness
  @media screen and (max-width: $breakwidth)
    #sidebar
      box-shadow: -2px 0px 5px black
    #content
      margin-right: 0px
      &.editorShown
        margin-right: 0px


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
      @include badge(100px)
      margin-bottom: 20px
  .banner-badge
      @include badge(80px)
      margin-bottom: 8px

</style>