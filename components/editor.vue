<template>
	<div class="box editor-box" style="margin:10px auto 22.5px auto;" :style="addedStyle || {}">
		<div class="field has-addons">
			<p class="control">
				<a class="button" :class="{'is-dark': mode=='default'}" @click="changeMode('default')">Default</a>
			</p>
			<p class="control">
				<a class="button" :class="{'is-dark': mode=='saved'}" @click="changeMode('saved')">Saved</a>
			</p>
			<p></p>
			<p class="control">
				<a class="button is-primary" @click="run()">Run Code</a>
			</p>
		</div>
		
		<div class="columns">
			<div class="column is-7">
				<div ref="editor" class="editor" :style="{'min-height': height || '200px'}">{{defaultCode}}</div>
			</div>
			<div class="column editor-output">
				<div v-for="(out,i) in output" :key="i" class="output-line">
					<span>[{{i+1}}]</span>&nbsp;<span v-html="out"></span>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		props: ['editorID', 'height', 'addedStyle'],
		data() {
			return {
				// Modes: default/saved
				mode: "default",
				defaultCode: "",
				savedCode: "",
				eID: "",

				editor: Object,
				output: []
			}
		},



		methods: {
			// RUN METHOD: run code from editor
			run() {
				// NEED TO RUN SOME SANITIZING
				let that = this;
				that.output = [];
				// Functions to use in run method
				function print(line) {
					that.output.push(line);
				}


				try {
					// Get editor text
					let evalString = this.editor.getValue();

					/*
					** Handle saving code to local storage
					*/
					// If not default code...
					if (evalString != this.defaultCode) {
						this.savedCode = evalString;
						// If in default mode, change to saved mode
						if (this.mode == "default") {
							this.changeMode('saved');
						}
						// Try to save the code to localStorage
						if(this.eID) {
							try {
								localStorage.setItem(`cosma/${this.eID}`, this.savedCode);
							} catch(e) {}
						}	
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



		// Before mounting...
		beforeMount() {
			// Get code from slot, set it as default code
			this.defaultCode = this.$slots.default[0].text;
			// Check for id...
			let eID = this.$props.editorID;
			// If there's an eID, try to pull from localStorage
			if (eID) {
				this.eID = eID;
				try {
					let savedCode = localStorage.getItem(`cosma/${eID}`);
					if (savedCode) {
						this.savedCode = savedCode;
					}
				} catch(e) {
					this.savedCode = "";
				}
			}
		},



		// On creation, we try to create editor. Set on interval, so Vue has time to create DOM elements
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
			    		this.run();
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