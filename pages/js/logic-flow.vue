<template>
	<div>
		<banner :title="title"></banner>
		<section class="section">
			<div class="container content">
				<!-- Begin body -->
				
				<p class="title">Logic and Flow</p>


			<!-- END BODY -->
			</div>
		</section>
	</div>
</template>

<script>
	import editor from '~/components/editor.vue';
	import banner from '~/components/banner.vue';

	export default {
		components: {editor, banner},
		
		data() {
			return {
				title: "Logic and Flow"
			}
		},

		head() {
			return {
				title: this.title
			}
		}
	}

</script>