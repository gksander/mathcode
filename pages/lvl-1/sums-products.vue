<template>
	<div>
		<p class="title">Sums</p>
		<p>
			In math and programming, we often want to add or multiply together multiple numbers or "terms". When we add together multiple numbers or terms, we refer to the result as a <strong>sum</strong>. For example, we would call \[1 + 2 + 3 + 4 + 5\] a sum. In this case, the value of the sum is 15 (just add up all of the numbers). In math, when we have a sum that can be described using a <em>pattern</em>, we often use <em>summation notation</em> - it's just a way to more concisely represent a sum. For example, we can rewrite the previous sum in the following way: \[ 1 + 2 + 3 + 4 + 5 = \sum_{i=1}^{5} i \] The symbol that looks like \(\sum\) is the capital Greek letter "Sigma" and stands for "sum". Notice the \(i=1\) underneath the \(\sum\): this indicates that we will use \(i\) as a variable and its value will start at 1. The \(5\) above \(\sum\) indicates that \(i\) will stop at 5. In math, \(i\) will increment by 1. Then, whatever is after \(\sum\) is the expression we will be adding to our sum - in this case, for each value of \(i\), we just add \(i\) to our sum.
		</p>
		<hr>
		<p>
			Let's look at another example. Consider the sum \[\sum_{i=0}^{3} i^2. \] We can think about this sum in the following way:
		</p>
		<ol>
			<li>We start with a sum of 0.</li>
			<li>Since we have \(i=0\) under \(\sum\), we are starting with \(i=0\). We look the right of \(\sum\) and notice that we are computing \(i^2\). Since \(0^2=0\) we add 0 to our sum of 0 (so we still have 0).</li>
			<li>We now increment \(i\) by 1, so \(i=1\). We compute \(i^2\) which is \(1^2 = 1\) and we add that to our sum. So our sum is now 1.</li>
			<li>We repeat the previous step, so now \(i=2\) and \(i^2 = 2^2 = 4\) and we add this to our sum. So our sum is now \(1 + 4 = 5\)</li>
			<li>We repeat the previous step, so now \(i=3\) and \(i^2 = 3^2 = 9\) and we add this to our sum. So our sum is now \(5 + 9 = 14\).</li>
			<li>Since we have a \(3\) above \(\sum\), it means we stop at \(i=3\). Therefore our sum is 14.</li>
		</ol>
		<p>
			We can represent this in an equation as follows: \[ \begin{aligned} \sum_{i=0}^3 i^2 &amp;= 0^2 + 1^2 + 2^2 + 3^2 \\ &amp;= 0 + 1 + 4 + 9 \\ &amp;= 14 \end{aligned} \]
		</p>
		<p>
			Take a moment to review the previous steps, and make sure the summation notation makes sense. There's a lot going on, so it's okay if it takes awhile to make sense of it!
		</p>
		<hr>
		<p>
			Summation notation is convenient for representing sums, but actually doing the computations to compute the value of a sum can be long and boring. Luckily, <em>computers are great at computing</em>! Let's see how we could use JavaScript to compute the value of a sum for us. Consider the sum: \[ \sum_{i=0}^{24} i^2. \] This is similar to the one we just looked at, but now we repeat the main step until \(i=24\). That'd be a lot of work by hand! The code below shows how we can write code to do this for us.
		</p>
		<codeedit editorID="lvl-1/sums-products/compute-sum">var sum = 0;

// Start at i=0 and go to i=24, increments of 1
for (var i = 0; i &lt;= 24; i++) {
	// Add i*i to the sum
	sum = sum + (i*i);
}

print(sum);</codeedit>
		<p>
			In line (1) above, we start with a sum of 0. At line (4) we start a for-loop, and we start at <code>i = 0</code> because our sum starts at \(i = 0\). We increment <code>i</code> by 1 (<code>i++</code>) because that's what we do in math. And we use values of <code>i</code> that are <code>&lt;= 24</code>, which means we stop once <code>i == 24</code>. Then, for each value of <code>i</code> we take <code>sum</code> and add <code>(i*i)</code> to it, which represents adding \(i\cdot i = i^2\) to it. At this point, the computer will handle the computing, and in line (9) we print the sum.
		</p>
		<p>
			The glorious thing about this is: we now have a template for computing sums! We could compute the value of \[ \sum_{i=0}^{320} i^2 \] by just tweaking the code above <em>just a little bit</em>. Try it out in the code above!
		</p>

		<p class="title">Products</p>
		<p>
			<em>Products</em> are just like <em>sums</em>, except instead of adding we multiply. The following is considered a product: \[ 1 \cdot 2 \cdot 3 \cdot 4 \cdot 5 \] and it has a value of 120. We can represent this with "product notation" as \[ 1\cdot 2\cdot 3\cdot 4\cdot 5 = \prod_{i=1}^5 i \]
		</p>
		<p>
			The \(\prod\) is the captial Greek symbol "Pi", and stands for "product" when used in math. Product notation is used in almost the exact same way that summation notation is used, except instead of adding we multiply. Also note that when we use product notation, we assume that we start with 1 (instead of 0) and then we multiply onto that. If we started with 0, we would always get a product of 0!
		</p>
		<hr>
		<p>
			Let's determine the value of \[ \prod_{i=1}^{20} \frac{i}{2} \] If we were to do this by hand, we would have to do the following: \[ \prod_{i=1}^{20} \frac{i}{2} = \left(\frac{1}{2}\right) \cdot \left(\frac{2}{2}\right) \cdot \left(\frac{3}{2}\right) \cdots \left(\frac{20}{2}\right) \] but the \(\cdots\) indicates we skipped a bunch of computations. To do this by hand would be tedious, so let's use the computer. The code below shows how we can do this.
		</p>
		<codeedit editorID="lvl-1/sums-products/compute-prod">var product = 1;

// Start at i = 1 and go to i = 20
for (var i = 1; i &lt;= 20; i++) {
	// Multiply our product by (i/2)
	product = product * (i/2);
}

print(product);</codeedit>



		<p class="activities-title">Activities</p>

		<p class="title">Activity: Computing a sum</p>
		<p>
			Use the editor below to compute the value of \[ \sum_{i=1}^{100} (1+2\cdot i) \] If done correctly you should get a value of 10200.
		</p>
		<codeedit editorID="lvl-1/sums-products/activity-sum-1">print("Your code here.");</codeedit>

		<p class="title">Activity: Computing a product</p>
		<p>
			Use the editor below to compute the value of \[ \prod_{i=2}^{17} \frac{i-1}{3} \] If done correctly, you should get a value slightly larger than 486048.
		</p>
		<codeedit editorID="lvl-1/sums-products/activity-prod-1">print("Your code here.");</codeedit>

		<p class="title">Activity: Predicting a product</p>
		<p>
			<em>Without using the computer</em>, predict the value of \[ \prod_{i=0}^{100} i^2 \] Once you've made a prediction, use the editor below to test your prediction. How were you able to predict the result before computing?
		</p>
		<codeedit editorID="lvl-1/sums-products/activity-zero-prod">print("Your code here.");</codeedit>

		<p class="title">Activity: Sum of even numbers</p>
		<p>
			Use the editor below to compute the sum of the first 1000 positive even numbers.
		</p>
		<codeedit editorID="lvl-1/sums-products/activity-sum-evens">print("Your code here.");</codeedit>
		
		

	</div>
</template>

<script>
	import codeedit from '~/components/codeedit.vue';

	export default {
		components: {codeedit},
		
		data() {
			return {
				title: "Sums and Products"
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