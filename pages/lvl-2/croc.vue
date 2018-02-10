<template>
	<div>
		<p class="title">Changing Quantities</p>
    <p>
      Suppose \( x \) is a variable. Recall that we generally think of \( x \) as representing the <em>varying</em> value of some quantity. In math and science, we generally ask questions about how a value <em>changes</em> over some interval.
    </p>
    <p>
      So, suppose \( x \) varies from \( x = 3 \) to \( x = 8 \). By how much did \( x \) change by? Your gut might tell you that \( x \) changed by 5 - which is correct! To represent that "\( x \) changed by 5," we generally write \( \Delta x = 5 \). The triangle, \( \Delta \), is actually the Greek letter "Delta", and we use this symbol to denote a "change".
    </p>
    <p>
      Now, suppose that \( x \) varies from \( x = 2 \) to \( x = -3 \). By how much did \( x \) change by? In this case, \( x \) changed by 5, but in the <em>negative</em> direction! That is, \( x \) <em>decreased</em> by 5! To represent this, we would write \( \Delta x = -5 \).
    </p>
    <p>
      In general, the change in \( x \) is the amount that the final value of \( x \) exceeds the initial value of \( x \), which means that if \( x \) varies from \( x = x_i \) to \( x = x_f \) then the change in \( x \) is \[ \Delta x = x_f - x_i \] Let's write some code to do some computing for us! The code below shows a <code>change()</code> function that takes an initial value and a final value as inputs, and then computes the change in value from the initial value to the final value.
    </p>
    <codeedit editorID="lvl-2/croc/change-function">function change(initial_value, final_value) {
  return final_value - initial_value;
}

print( change(3, 8) );
print( change(2, -3) );
print( change(1.72, 1.834) );</codeedit>
    <p>
      In lines (1) - (3) above, we define a function <code>change()</code> that computes a change from <code>initial_value</code> to <code>final_value</code>. Then, lines (5) - (7) use this function. Make sure this makes sense to you! Why does line (6) print a negative value?
    </p>

    <p class="title">Constant Rate of Change: Special Changes</p>
    <p>
      <em>Constant rate of change</em> relationships are very important in math! They are a special type of relationship between two quantities where the <em>change</em> in one quantity's value is always same number of times as large as the <em>change</em> in the value of the other quantity.
    </p>
    <p>
      For example, if \( x \) and \( y \) vary together at a constant rate of change of 2, it means that whenever \( x \) changes by some amount, \( y \) changes by exactly 2 times as much. So if \( x \) increases by 1, \( y \) will increase by \( 2\cdot 1 = 2 \). If \( x \) increases by 0.5 then \( y \) changes by \( 2 \cdot 0.5 = 1 \). If \( x \) changes by 0.001 then \( y \) changes by \( 2 \cdot 0.001 = 0.002 \). In general, if \( x \) changes by \( \Delta x \) then \( y \) will change by \[ \Delta y = 2\cdot \Delta x \] This is a very useful property! If we know how much \( x \) changes by, we know exactly how much \( y \) will change by!
    </p>
    <p>
      The code editor below...
    </p>


		
		

	</div>
</template>

<script>
	import codeedit from '~/components/codeedit.vue';

	export default {
		components: {codeedit},
		
		data() {
			return {
				title: "Constant Rate of Change"
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