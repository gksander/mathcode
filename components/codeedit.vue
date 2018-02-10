<template>
	<div>
		<pre
			:class="{'is-active': $store.state.eID == editorID}"
			class="prettyprint lang-js linenums desert"
			@click="changeCode()"
		><code><slot></slot></code></pre>
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
		cursor: pointer
		margin-bottom: 1em
		// padding: 15px
		border-radius: 5px
		tab-size: 2
		transition: box-shadow 400ms
		&.is-active
			box-shadow: 0px 0px 7px black

</style>