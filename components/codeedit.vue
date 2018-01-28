<template>
	<div>
		<pre
			:class="{'is-active': $store.state.eID == editorID}"
			@click="changeCode()"
		><slot></slot></pre>
	</div>
</template>

<script>
	export default {
		props: ['editorID'],

		methods: {
			changeCode() {
				let code = "", eID = "";
				try {
					// Get code from slot, set it as default code
					code = this.$slots.default[0].text;
					eID = this.$props.editorID;
				} catch(e) {
					code = "";
					eID = "default";
				}
				this.$store.commit('changeEID', eID);
				this.$store.commit('changeDefaultCode', code);
			}
		}
	}
</script>

<style lang="sass" scoped>
	pre
		color: white
		cursor: pointer
		margin-bottom: 1em
		background-color: #202020
		padding: 10px
		border-radius: 5px
		tab-size: 2
		&.is-active
			// border-width: 3px
			color: #55e555
		&:hover:not(.is-active)
			color: #5fdeed

</style>