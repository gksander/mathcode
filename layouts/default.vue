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
        <div v-for="(out,i) in output" :key="i" class="output-line" v-html="out"></div>

      </div>
    </div>

    <!-- Content -->
    <div id="content" :class="{'editorShown': editorShown}">

      <section class="hero is-primary" style="position:relative;" id="banner">
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
        function print(n, line) {
          that.output.push(`<span class='output-line-number'>[${n}]</span> ${line.toString()}`);
        }

        try {
          // Get editor text, change print(x) to print(n, x)
          let evalString = this.editor.getValue();
          let es_split = evalString.split("\n");
          for (let i = 0; i < es_split.length; i++) {
            var line = es_split[i];
            es_split[i] = line.replace(/print\(/g, `print(${i+1}, `);
          }

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

          evalString = Babel.transform(es_split.join("\n"), {presets: ['es2015']}).code;
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
      try {
        let cw = document.body.clientWidth;
        if (cw < 990) {
          this.$store.commit('hideEditor');
        }
      } catch(e){}

      let created = false;
      let int = setInterval(() => {
        try {
          this.editor = ace.edit(this.$refs.editor);
          this.editor.setTheme("ace/theme/chrome");
          // this.editor.setTheme("ace/theme/monokai");
          this.editor.session.setMode("ace/mode/javascript");
          this.editor.getSession().setTabSize(2);
          this.$refs.editor.style.fontSize = "15px";
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