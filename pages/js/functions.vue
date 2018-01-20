<template>
	<div>
		<banner :title="title"></banner>
		<section class="section">
			<div class="container content">
				<!-- Begin body -->
				
				<p class="title">Functions</p>


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
				title: "JavaScript Functions"
			}
		},

		head() {
			return {
				title: this.title
			}
		}
	}

</script>