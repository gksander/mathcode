<template>
	<div>
		<banner :title="title"></banner>
		<section class="section">
			<div class="container content">
				<p class="title">What is this?</p>
				<p>
					This is an extension of <a href="https://cosmalearning.com" target="_blank">cosmalearning.com</a> and was developed to support learners in exploring both math <em>and</em> programming. The site consists of various tutorials, examples, and exercises, ranging from basic programming concepts to mathematical ideas. Througout the site you will see editors that look like this:
				</p>
				<editor height="80px">print("I'm an editor!");
		print("You can edit me, and run the code.");</editor>
				<p>
					You can edit the code in the code-editor, and then press the "Run Code" button to run your code. The output of your code will be shown to the right (or below) the code editor. <em>You can also press Ctrl + Enter (or Cmd + Enter on Mac) to run your code.</em>
				</p>
				<p>
					The code editors are running JavaScript code. JavaScript is a programming language that nearly all websites use -- it is the code that runs in your web browser. So, anytime you are using an interactive website, chances are there is some JavaScript running behind the scenes. In this site you will also have access to some functionality that is beyond basic JavaScript to make the exercises more interesting.
				</p>
				<p>
					You will see the <code>print()</code> command <em>very</em> often throughout the site. The <code>print()</code> command will print an output to the output section of the editor. As an example, if you want to know what 4 + 6.5 is, you could run <code>print(4 + 6.5);</code>.
				</p>

				<p class="title">How should I maneuver the site?</p>
				<p>
					This site consists of a lot of separate pages, all of which can be access from the top nav-bar. We recommend you start by working through the pages in the "Intro" section, and then working through the pages in the "JavaScript" section. After that, you should be prepared to start tackling the rest of the pages in the site.
				</p>

				<p class="title">Who made this?</p>
				<p>
					This site was written by Grant Sander. You can get in contact with him at <a href="mailto:grant@cosmalearning.com" target="_blank">grant@cosmalearning.com</a>. Grant is a math nerd who also happens to love coding, and thinks more people should be enjoying the experience of writing code!
				</p>


			</div>
		</section>
	</div>
</template>

<script>
	import banner from '~/components/banner.vue';
	import editor from '~/components/editor.vue';


	export default {
		components: {banner, editor},
		data() {
			return {
				title: "About this site"
			}
		},

		head() {
			return {
				title: this.title
			}
		}
	}

</script>