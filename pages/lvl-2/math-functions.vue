<template>
	<div>
		<p class="title">Programming Functions</p>
		<p>
			In math <em>and</em> in programming, <strong>functions</strong> are perhaps the most important concept. However, "functions" in programming are slightly different than "functions" in math. Recall that in programming, functions are like named blocks of code that can be called, and we can pass "arguments" to functions to customize the behavior. The code below shows an example of a function in JavaScript.
		</p>
		<codeedit editorID="lvl-2/functions/coding-function">function sayHello(name) {
	return `Hello, ${name}!`;
}

var message = sayHello("John");
print(message);</codeedit>
		<p>
			Lines (1) - (3) define the function <code>sayHello</code>, which takes in a <code>name</code> parameter. The function will then use the value of <code>name</code> and return a string that says <code>Hello, ${name}!`</code>. Line (5) uses the <code>sayHello</code> function to create a message, and then line (6) prints the message. In this case, the <code>sayHello</code> function takes <code>name</code> as an input (or parameter) and then <em>returns</em> a value.
		</p>

		<p class="title">Math Functions</p>
		<p>
			In math, <em>functions</em> behave a little differently and are actually a little less flexible. In math, a <em>function</em> is a <em>relationship</em> between two quantities, where the value of one quantity <em>uniquely determines</em> the value of the other quantity.
		</p>
		<p>
			As an example, suppose \(x\) and \(y\) are related by the formula \(y = 2\cdot x\). Given <em>any</em> value of \(x\), there is only one corresponding value of \(y\): the value of \(y\) must be 2 times \(x\). Therefore we say that \(y\) is a function of \(x\), and we could actually "name" this function. If we named this function \(f\) then we could say that \[f(x) = 2\cdot x \quad \text{where} \quad y = f(x) \] Then, any time we know a value of \(x\), we can "give" it to the function \(f\) and \(f\) will return the corresponding value of \(y\). If \(x = 3.5\) then we would write \(f(3.5)\) to represent the value of \(y\) when \(x=3.5\), and hence \(f(3.5) = 7\).
		</p>
		<p>
			This should seem kind of similar to programming functions - you give the math function a value, and then the function gives you a value back. As another example, we could define a function \(g\) as \[ g(x) = x^2. \] If we know a value of \(x\), we can give that value to \(g\) and then \(g\) will square it and give us the squared value back. So, \(g(2) = 4\).
		</p>

		<p class="title">Putting these together</p>
		<p>
			Programming functions are more flexible than math functions, but this means that we can usually take a math function and use a programming function to represent it. Consider the function \( f(x) = 2\cdot x \) from above. The code below shows how we can define a programming function <code>f</code> to represent this.
		</p>
		<codeedit editorID="lvl-2/functions/math-to-programming-f">// Define the function f
function f(x) {
	return 2*x;
}

// Now let's use f
print( f(3.5) );

var a = 7.4;
print( f(a) );</codeedit>
		<p>
			In lines (2) - (4) above, we define the function <code>f</code>. It takes a value of <code>x</code> and then returns <code>2*x</code>. Make sure you understand what lines (7) - (10) are doing!
		</p>
		<hr>
		<p>
			Programming functions are more flexible than math functions, which allows us to do <em>more</em> with them. One example of this is, we can write multiple steps within a programming function. For example, consider the math function \[ h(x) = 2x + 5.\] This function takes a value of \(x\), doubles it, adds 5 to that, and then gives us the value back (this is based on the order of operations!). We can define a programming function for <code>h</code> as follows.
		</p>
		<codeedit editorID="lvl-2/functions/multi-step-def">function h(x) {
	var double = 2*x; // Double x
	var plusFive = double + 5; // Add 5 to double
	// Return the value
	return plusFive;
}

print( h(2) );
print( h(3.5) );</codeedit>
		<p>
			As we'll see in later pages, this flexibility gives us a <em>ton</em> of power!
		</p>
		

	</div>
</template>

<script>
	import codeedit from '~/components/codeedit.vue';

	export default {
		components: {codeedit},
		
		data() {
			return {
				title: "Math Functions"
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