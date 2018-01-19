<template>
	<section class="hero is-primary" style="position:relative">
		<div id="particles-js" style="position:absolute; left:0; right:0; top:0; bottom:0"></div>
		<div class="hero-body">
			<div class="container">
				<div class="columns is-vcentered">
					<div class="column is-8">
						<p class="title">{{ title || '...' }}</p>
						<p class="subtitle">{{ subtitle || 'COSma Coding' }}</p>
					</div>
					<div class="column has-text-centered">
						<div class="banner-badge">
							<img src="~/assets/img/logo.svg" alt="Logo" width="50px">
						</div>
						<p class="title is-5">COSma Learning</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		props: ['title', 'subtitle'],

		mounted() {
			particleBackground();
		}
	}
</script>