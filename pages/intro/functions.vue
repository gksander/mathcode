<template>
	<div>
		<banner :title="title"></banner>
		<section class="section">
			<div class="container content">
				<!-- Begin body -->
				
				<p class="title">Functions</p>
				<p>
					In programming, <em>functions</em> are like blocks of code that are executed when they are asked to do so. As a great example, the <code>print()</code> command we have been using is a function -- when it is called, whatever is inside of the parentheses of <code>print()</code> is printed to the output.
				</p>
				<p>
					Functions are perhaps the most important idea in both mathematics and programming! We will be using functions <em>constantly</em> throughout this site, and you will eventually be defining and using your own functions! When you use a function, you write the function's name, followed by parentheses with optional "arguments" inside of them. In the statement <code>print("Hello world!");</code>, <code>print</code> is the name of the function being executed and we say that "Hello World!" is the <em>argument</em> of the function.
				</p>
				<p>
					The editor below shows some functions being used. Try adjusting the <em>arguments</em> of some of the function calls. If you change the name of the functions, you will probably get an error!
				</p>
				<editor height="140px">//Using the sin() function
print( sin(3) );

// Using the gcd() function
var x = gcd(125, 15);
print(x);</editor>

				<p class="title">Defining functions</p>
				<p>
					This site has some built-in functions for you to use, but there might be times when you want to define your own function. Here's an example: suppose that, for a bunch of numbers, you need to double the number and then add 5. You could define a function to do this, and then whenever you want to perform this task - you can just call this function. The editor below shows this actual function.
				</p>
				<editor height="160px">function f(x) {
	return 2*x + 5;
}

print( f(2) );
print( f(3) );
print( f(7) );</editor>
				<p>
					Let's make sense of the code in the editor above. In lines (1) - (3) we are <em>defining</em> a function named <code>f</code>. In this case, <code>x</code> is a parameter of <code>f</code>. Whenever we use <code>f</code>, we give it a value for <code>x</code> (such as the <code>f(2)</code> in line 5). In line (2), we are <em>returning</em> a value from the function <code>f</code> - this is the value we get back whenever we call <code>f</code>.
				</p>
				<p>
					If we look at line (5), we are calling the function <code>f</code> and using 2 as an argument. When <code>f</code> is called, the parameter/variable <code>x</code> is set to 2, and then whatever is inside the curly braces {} of the function is called. In this case, <code>x = 2</code> and the function will return 2*2 + 5 = 9.
				</p>
				<p>
					In the editor above, what happens if we change the "2*x + 5" to "3*x" in line (2)? Think about it, and then try it out!
				</p>

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
				title: "Functions"
			}
		},

		head() {
			return {
				title: this.title
			}
		}
	}

</script>