<template>
	<div>
		<banner :title="title"></banner>
		<section class="section">
			<div class="container content">
				<!-- Begin body -->
				
				<p class="title">Activity: Say Hello!</p>
				<p>
					Complete the following task. Create a variable <code>yourName</code> and set it to <em>your</em> name. Then, print the statement "Hello, [your name here]!" where [your name here] contains your name. For example, if your name is John then your output should say "Hello, John!".
				</p>
				<editor height="120px"></editor>

				<p class="title">Activity: Computing Values</p>
				<p>
					Create two variables <code>x</code> and <code>y</code> and assign them numerical values. Then, print out the values of:
				</p>
				<ol>
					<li>\(x+y\)</li>
					<li>\(\frac{x}{y}\)</li>
					<li>\( x + \frac{y}{2}\)</li>
					<li>\( \frac{x+y}{2} \)</li>
					<li>\( |x - y| \)</li>
				</ol>
				<editor height="180px"></editor>

				<p class="title">Activity: Tip Calculator</p>
				<p>
					Define a function <code>computeTip</code> that will compute a 15% tip on a bill of price <code>price</code>. Then use this function to compute the necessary tip for bills of the following prices:
				</p>
				<ol>
					<li>$20</li>
					<li>$55</li>
					<li>$92.50</li>
				</ol>
				<p>
					I've got the function definition started for you.
				</p>
				<editor height="220px">function computeTip(price) {
	return ;
}</editor>


			<!-- END BODY -->
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
				title: "Intro Activities",
				inds: [...Array(10).keys()]
			}
		},

		head() {
			return {
				title: this.title
			}
		},

		mounted() {
			renderMath();
		}
	}

</script>