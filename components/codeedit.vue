<template>
	<div>
		<a class="button is-primary is-fullwidth" @click="changeCode()" style="margin-bottom:15px">See code</a>
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