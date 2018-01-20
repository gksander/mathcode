<template>
	<div class="box editor-box" style="margin:10px auto 22.5px auto;">
		<div class="field has-addons">
			<p class="control">
				<a class="button is-outlined" :class="{'is-primary': showEditor}" @click="showEditor = !showEditor">Editor</a>
			</p>
			<p class="control">
				<a class="button is-primary" @click="run()">Run Code</a>
			</p>
			<p class="control">
				<a class="button is-outlined" :class="{'is-primary': showOutput}" @click="showOutput = !showOutput">Output</a>
			</p>
		</div>
		
		<div class="columns">
			<div class="column" :class="{'is-7': showOutput}" v-show="showEditor">
				<div ref="editor" class="editor" :style="{'min-height': height || '200px'}"><slot></slot></div>
			</div>
			<div class="column editor-output" v-show="showOutput">
				<div v-for="(out,i) in output" :key="i" class="output-line">
					<span>[{{i+1}}]</span>&nbsp;<span v-html="out"></span>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		props: ['height'],
		data() {
			return {
				showEditor: true,
				showOutput: true,

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
					this.showOutput = true;
					let evalString = this.editor.getValue();
					evalString = Babel.transform(evalString, {presets: ['es2015']}).code;
					eval(evalString);
				} catch(e){
					console.log(e);
					that.output.push(`<span style='color:red'>${e}</span>`);
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