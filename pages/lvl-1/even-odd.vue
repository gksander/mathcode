<template>
	<div>
		<p class="title">Remainders</p>
		<p>
			On this page we will look at even and odd numbers. Before doing so, let's review the idea of "remainders" and they're relation to division. Recall that if we have a number \(a\) and divide it by \(b\) then we might get a remainder. For example, when we compute \(8 \div 3 \) we get 2 with a remainder of 2: \[ 8 = 3\cdot 2 + 2\] On your own, determine the remainder of 11 when divided by 4.
		</p>
		<p>
			In math and programming, it's common to use the term "modulus" to refer to the remainder after division. Conveniently, in most programming languages there is a "modulo" operator that tells us the remainder after division. In JavaScript, the modulo operator is notated with <code>%</code> and we use it kind of like the division symbol. For example, we would write <code>8 % 3</code> to compute the remainder of 8 after division by 3. So <code>8 % 3 == 2</code>. The code below shows a few examples of the modulo operator.
		</p>
		<codeedit editorID="lvl-1/even-odd/modulo">print(8 % 3);
print(11 % 4);

var x = 174, y = 23;
print(x % y);</codeedit>
		
		<p class="title">Even and Odd Numbers</p>
		<p>
			An <strong>even</strong> integer is an integer that is a multiple of 2. For example: 4, 6, and 10 are all even because \(2\cdot 2 = 4\), \(2\cdot 3 = 6\) and \(2\cdot 5 = 10\). On the other hand, an <strong>odd</strong> integer is an integer that is <em>not even</em>. We can think of an odd number as a number that is 1 more than an even number. We can then say that any odd number \(a\) looks like \[a = 2\cdot n + 1 \] where \(n\) is some integer.
		</p>
		<p>
			By the way even and odd numbers are defined, we can use <em>remainders</em> as a way to test whether or not a number is even or odd - and this is a common thing to do in programming! Since even integers are always 2 times another number... PICK UP HERE.
		</p>

		

	</div>
</template>

<script>
	import codeedit from '~/components/codeedit.vue';

	export default {
		components: {codeedit},
		
		data() {
			return {
				title: "Even and Odd Numbers"
			}
		},

		head() {
			return {
				title: this.title
			}
		},

		mounted() {
			this.$store.commit('changeTitle', this.title);
			renderMath();
		},

		beforeDestroy() {}
	}

</script>