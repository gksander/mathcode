<template>
	<div>
		<banner :title="title"></banner>
		<section class="section">
			<div class="container content">
				<!-- Begin body -->
				
				<p class="title">Programs and Statements</p>
				<p>
					A <em>computer program</em> is a list of <em>statements</em> for a computer to execute. When you write a program, you are essentially writing a list of things you want the computer to do. We refer to each instruction as a <em>statement</em>, and therefore coding (or programming) can be thought of as writing a series of statements. The editor below shows a short program with three statements.
				</p>
				<editor height="70px">print("Hello world!"); // Statement 1
var x = 5; // Statement 2
print(x + 2); // Statement 3</editor>
				<p>
					Once you understand a programming "language", you can think of programming as telling a computer what to do! Throughout this site, we will be using a programming "language" named <em>JavaScript</em>.
				</p>

				<p class="title">What is JavaScript?</p>
				<p>
					JavaScript is the programming "language" that web browsers understand, and therefore it can be thought of as "the language of the web". Chances are, every website that you visit on a regular base is using JavaScript behind the scenes. This site is powered almost entirely by JavaScript! It is a very powerful language, and is relatively easy to learn.
				</p>
				<p>
					Although JavaScript was originally developed for use in web browsers, it's use has been since expanded. For example, Walmart recently started using JavaScript (Node.js) to run the purchasing portion of their website, and it saved them a ton of money!
				</p>

				<p class="title">JavaScript Syntax</p>
				<p>
					In programming, the <em>syntax</em> of a language is the set of rules that you must follow for the computer to understand your code. Consider the editor below: the first line uses correct syntax, whereas the second line does not use correct syntax. In the output, there is an error because we did not use proper syntax.
				</p>
				<editor height="60px">print("Hello world!"); // Correct syntax
print "Hello world!"; // Incorrect syntax</editor>
				<p>
					In the editor above, change the second line to look like the first line, and things will work! Throughout this tutorial, you will be slowly introduced to the syntax of JavaScript. It will be discussed in further detail on this page.
				</p>

				<p class="title">Variables</p>
				<p>
					In programming, <em>variables</em> are like "named containers" for storing data. This allows you to name a piece of data, and refer to it by that name later on. In JavaScript, we define variables by writing statements of the form <code>var [name] = [value]</code>. For example, <code>var x = 5;</code> will store the value "5" in a variable named <code>x</code>, and any time you reference the variable <code>x</code> the code will read it as "5". In JavaScript we can name our variables using letters, numbers, and some characters such as underscores (just make sure your variable name starts with a letter). The editor below shows some code where variables are defined and used.
				</p>
				<editor height="170px">var x = 5;
print(2*x);

var yourName = "John Doe";
print(yourName);

var a = 3;
print(a * x);</editor>
				<p>
					In the code above, the variables <code>x</code>, <code>yourName</code> and <code>a</code> are defined and used. We use the <code>var</code> keyword to <em>declare</em> or create a variable. Once a variable has been defined, you can actually change its value by using a statement of the form <code>[name] = [new value]</code>. The editor below shows this idea, where a variable is defined and used, then changed and used again.
				</p>
				<editor height="170px">var x = 6;
print(x);

x = 8;
print(x);

x = x + 2;
print(x);</editor>
					<p>
						Another convenient feature of JavaScript is that you can define multiple variables at once by separating each variable definition with commas. The following editor shows this idea.
					</p>
					<editor height="120px">var x = 5, y = 3, z = -2;

print(x);
print(y);
print(z);</editor>
				
				<p class="title">Operators</p>
				<p>
					<em>Operators</em> are essentially tools for taking one or two values, and then producing a new value from them. For example, addition is an operator. Notice that \( 5 + 3 = 8 \). The addition "operator" takes 5 and 3 and then returns 8. In programming, there are <em>many</em> useful operators. We will cover a lot of operators on <nuxt-link to="/js/operators">this page</nuxt-link>. For now, think of operators in a way similar to additon. The editor below shows a few statements that use some basic arithmetic operators.
				</p>
				<editor height="110px">var x = 5;
print(x + 3); // Addition
print(2 * x); // Multiplication
print(x - 6); // Subtraction</editor>

				<p class="title">Expressions</p>
				<p>
					In coding, <em>expressions</em> are just groups of values, variables and operators that will evaluate to a single value. For example, <code>5 + 3</code> is an expression. So is <code>x + 5/3</code>. Expressions are used <em>very often</em> in programming. We will be using this term very frequently - just think of it as using old values and operators to create a new value.
				</p>


			<!-- END BODY -->
			</div>
		</section>
	</div>
</template>

<script>
	import editor from '~/components/editor.vue';
	import banner from '~/components/banner.vue';

	export default {
		components: {editor, banner}, 
		
		data() {
			return {
				title: "JavaScript Basics"
			}
		},

		head() {
			return {
				title: this.title
			}
		},

		mounted() {
			renderMath();
		}
	}

</script>