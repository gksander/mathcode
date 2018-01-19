<template>
	<div>
		<banner :title="title"></banner>
		<section class="section">
			<div class="container content">
				<!-- Begin body -->
				
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


				<p class="title">Strings</p>
				<p>
					In a previous editor, the variable <code>yourName</code> is defined using quotes. <code>"John Doe"</code> is what we refer to as a <em>string</em>, which is just a string of characters - like a word or a sentence! Strings are very useful in coding, so let's explore them a little bit further.
				</p>
				<p>
					JavaScript strings are used for storing text data (such as words and sentences), and consist of zero or more characters inside of quotes (single or double!). For example, <code>"John Doe"</code> and <code>'hello'</code> are both examples of strings. 
				</p>
				<p>
					Strings can be "added" together, which is referred to as "concatenation". This is essentially like glueing together the two strings. To concatenate two strings, use the <code>+</code> operator. Adding together two strings looks just like adding together two numbers! The editor below shows a couple examples. Try it out yourself.
				</p>
				<editor height="170px">print("Hello, " + "world!");

var x = "Just like";
var y = " glue!";
print(x + y);

var yourName = "Grant";
print("Hi, " + yourName + ", how are you doing?");</editor>
				
				<p class="title">Expressions</p>
				<p>
					After defining variables, it is common to use them in <em>expressions</em> to create new values. Expressions are groups of values, variables and operators that evaluate to a single value. This sounds complicated, but here's an example: <code>5 + 3</code> is an expression. So is <code>"Hello " + "World"</code>. Basically, anything that has a value can be thought of as an expression. 
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
				title: "Variables"
			}
		},

		head() {
			return {
				title: this.title
			}
		}
	}

</script>