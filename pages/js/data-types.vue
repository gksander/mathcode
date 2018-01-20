<template>
	<div>
		<banner :title="title"></banner>
		<section class="section">
			<div class="container content">
				<!-- Begin body -->
				
				<p class="title">Data Types</p>
				<p>
					In programming there is an important idea referred to as <em>data types</em>. Each variable or piece of information has a "type," and the computer handles different types of data differently. For example, a number and a word are different "types" of data and the computer will handle them in slightly different ways. Some important types of data in JavaScript are:
				</p>
				<ul>
					<li>number</li>
					<li>string</li>
					<li>boolean</li>
					<li>array</li>
					<li>function</li>
					<li>object</li>
				</ul>
				<p>
					We will briefly explore each of these data types on this page.
				</p>

				<p class="title">Numbers</p>
				<p>
					In JavaScript, numbers are... well, just numbers. They can be whole number values, negative numbers, or even decimals. The editor below shows a few different JavaScript numbers.
				</p>
				<editor height="160px">var x = 5;
var y = -3;
var z = 2.56782;

print(x);
print(y);
print(z);</editor>
					

				<p class="title">Strings</p>
				<p>
					JavaScript "strings" are used for storing text data (such as words and sentences), and consist of zero or more characters inside of quotes (single or double!). For example, <code>"John Doe"</code> and <code>'hello'</code> are both examples of strings. Strings are great for holding sentences or text information, and are used very regularly in web development and other computer fields. The editor below shows a couple variables that have string values.
				</p>
				<editor height="120px">var yourName = "John Doe";
var sayHello = 'Hello!';

print(yourName);
print(sayHello);</editor>
				<p>
					Strings can also be wrapped inside of "backticks" which is the key at the top-left of your keyboard that looks like a backwards apostrophe. The expression <code>`John Doe`</code> has the same value as <code>"John Doe"</code>. It seems like we have a lot of options for creating strings, but this last option is perhaps the most useful! Using backticks, we can put variable values into our strings. If we want to put the variable <code>x</code> in a string, wesimply place <code>${x}</code> where we want <code>x</code> to be in the string. The editor below shows this in action!
				</p>
				<editor height="80px">var yourName = "John Doe";

print(`Hello, ${yourName}!`);</editor>
				<p>
					We call this type of string, that uses backticks, "template strings" and placing values inside of them is referred to as "string interpolation". You can also place general JavaScript expressions inside of <code>${ }</code> when using string interpolation.
				</p>


				<p class="title">Booleans</p>
				<p>
					In JavaScript there is a data type referred to as a "boolean". A boolean value is a true/false value, so a boolean is either true or false. As we will see in later sections, booleans play a large role in programming - and many expressions evaluate to a boolean. As an example, the expression <code>5 &gt; 3</code> has a value of true because 5 is indeed greater than 3. So <code>5 &gt; 3</code> has a boolean value.
				</p>


				<p class="title">Arrays</p>
				<p>
					"Arrays" are like ordered lists of data. Suppose you have a list of all of the ingredients you need to make a sandwich. You could store these ingredient names in an <em>array</em>. The editor below actually shows this!
				</p>
				<editor height="130px">var ingredients = ["Bread", "Ham", "Cheese", "Mayonaise"];

print(ingredients);</editor>
				<p>
					...
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
				title: "JavaScript Data Types"
			}
		},

		head() {
			return {
				title: this.title
			}
		}
	}

</script>