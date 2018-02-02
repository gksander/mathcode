<template>
	<div>
		<p class="title">{{ title }}</p>
    <p>
      In math it is common to have a function that behaves differently for different intervals of the input value. For example, suppose \(f\) is a function such that \(y=f(x)\). Suppose that \(f(x) = -x\) if \(x\) is negative but \(f(x)=x\) if \(x\) is not negative. The graph of this function is shown below.
    </p>
    <app-img width="300" src="/img/graph_absx.svg"></app-img>
    <p>
      To write a function formula for this function \(f\), we have to separate the function into two parts: when \( x \lt 0\) and when \(x \ge 0\). To do this, we write \(f\) as a <strong>piecewise function</strong>. We would write the function formula as follows: \[ f(x) = \begin{cases} -x &amp; \text{if } x \lt 0 \\ x &amp; \text{if } x \ge 0 \end{cases} \] Each "line" of this formula tells us the value of \(f(x)\) for the given condition. For example, the formula tells us that \(f(x) = -x\) if \(x \lt 0\). The second line then tells us that \(f(x) = x\) if \(x \ge 0\). If \(x\) is <em>not</em> less than 0, then it must be greater than or equal to 0 (\(\ge 0\)) and therefore specifying this in the function formula can be redundant. Therefore, it is common to see this formula written as \[ f(x) = \begin{cases} -x &amp; \text{if } x \lt 0 \\ x &amp; \text{else}\end{cases} \] This kind of thinking should look familiar! We use this kind of thinking in programming all the time!
    </p>
    <p>
      Let's use programming to represent the function \(f\) from above. 
    </p>
    <codeedit editorID="lvl-2/piecewise/absx-split">function f(x) {
  if (x &lt; 0) {
    return -x;
  } else {
    return x;
  }
}

print( f(-15) );
print( f(7) );</codeedit>
    <p>
      In the code above, we define the function <code>f</code> using lines (1) - (7). On line (2) we check to see if <code>x</code> is negative, and if it is we return <code>-x</code> (line (3)). Otherwise, we return <code>x</code> (line (5)). This is the same logic that we used when thinking mathematically about the function, but now we're just representing it with code. 
    </p>

    <p class="title">Example: Tipping your waitress</p>
    <p>
      When eating at a restaurant, it is courtious to tip your waitress. Generally, people tip between 10% and 25% of their bill. Suppose you decide to tip your waitress 15% if your bill was less than $100, but tip her 20% if the bill was $100 or more. Let's define a function "tipAmount" that takes a bill amount (in dollars) as an input, and then outputs the amount that you will tip the waitress. Mathematically, this function will look like the following: \[ \text{tipAmount}(x) = \begin{cases} 0.15\cdot x &amp; \text{if } x \lt 100 \\ 0.2\cdot x &amp; \text{else} \end{cases} \] We could represent this math function with code using the following:
    </p>
    <codeedit editorID="lvl-2/piecewise/tippingWaitress">function tipAmount(x) {
  if (x &lt; 100) {
    return 0.15 * x;
  } else {
    return 0.2 * x;
  }
}

print(`Tip on $35: ${tipAmount(35)}`);
print(`Tip on $147.35: ${tipAmount(147.35)}`);</codeedit>
    <p>
      Similar to our previous code, lines (2) - (4) take care of the case when the bill is less than $100, and then lines (4) - (6) handle the case when the bill is $100 or more.
    </p>
		
		

	</div>
</template>

<script>
	import codeedit from '~/components/codeedit.vue';
	import appImg from '~/components/app-img.vue';

	export default {
		components: {codeedit, 'app-img': appImg},
		
		data() {
			return {
				title: "Piecewise Functions"
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