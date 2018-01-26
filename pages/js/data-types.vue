<template>
	<div>
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
		<codeedit editorID="js/data-types/numbers">var x = 5;
var y = -3;
var z = 2.56782;

print(x);
print(y);
print(z);</codeedit>
			

		<p class="title">Strings</p>
		<p>
			JavaScript "strings" are used for storing text data (such as words and sentences), and consist of zero or more characters inside of quotes (single or double!). For example, <code>"John Doe"</code> and <code>'hello'</code> are both examples of strings. Strings are great for holding sentences or text information, and are used very regularly in web development and other computer fields. The editor below shows a couple variables that have string values.
		</p>
		<codeedit editorID="js/data-types/strings">var yourName = "John Doe";
var sayHello = 'Hello!';

print(yourName);
print(sayHello);</codeedit>
		<p>
			Strings can also be wrapped inside of "backticks" which is the key at the top-left of your keyboard that looks like a backwards apostrophe. The expression <code>`John Doe`</code> has the same value as <code>"John Doe"</code>. It seems like we have a lot of options for creating strings, but this last option is perhaps the most useful! Using backticks, we can put variable values into our strings. If we want to put the variable <code>x</code> in a string, wesimply place <code>${x}</code> where we want <code>x</code> to be in the string. The editor below shows this in action!
		</p>
		<codeedit editorID="js/data-types/stringliterals">var yourName = "John Doe";

print(`Hello, ${yourName}!`);</codeedit>
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
		<codeedit editorID="js/data-types/definearray">var ingredients = ["Bread", "Ham", "Cheese"];

print(ingredients);</codeedit>
		<p>
			Line (1) in the editor above defines a variable <code>ingredients</code> and sets its value to an <em>array</em>. We define arrays by putting the elements inside of square brackets, and separating each item with a comma. In the example above, <code>["Bread", "Ham", "Cheese"]</code> is an array. When we look at an array, we can think of it as an ordered list - but the first element we see is considered the 0<sup>th</sup> element of the array. This is important! So we think of this array as:
		</p>
		<ol start="0">
			<li>"Bread"</li>
			<li>"Ham"</li>
			<li>"Cheese"</li>
		</ol>
		<p>
			To access the elements of an array, we again use square brackets - but we put them <em>after</em> the array's variable name. For example, <code>ingredients[0]</code> will get the 0<sup>th</sup> element of the <code>ingredients</code> array. Do you remember what ingredient that is? The editor below shows this in action.
		</p>
		<codeedit editorID="js/data-types/accessarray">var ingredients = ["Bread", "Ham", "Cheese"];

print( ingredients[0] );
print( ingredients[1] );
print( ingredients[2] );</codeedit>
		<p>
			To <em>change</em> the value of an array element, we use similar syntax. We specify what array element we would like to change, and then we tell the computer what value to give it. Suppose that you'd like turkey on your sandwich, instead of ham. The editor below shows how you can change the <code>ingredients</code> array to show this.
		</p>
		<codeedit editorID="js/data-types/setArrayElement">var ingredients = ["Bread", "Ham", "Cheese"];
print(ingredients);

// Now change to turkey
ingredients[1] = "Turkey";
print(ingredients);</codeedit>
		<p>
			In programming, arrays are very important. Play with the code editors above to get a feel for how arrays work. 
		</p>

		<p class="title">Functions and Objects</p>
		<p>
			There are two more <em>very</em> important data-types in JavaScript (and most programming languages): <em>functions</em> and <em>objects</em>. These types of data are a little more sophisticated that the ones we just covered, so they will be covered in their own pages.
		</p>

		<p class="title">ACTIVITIES</p>

		<p class="title">Activity: Printing Your Age</p>
		<p>
			In the editor below do the following:
		</p>
		<ol>
			<li>Define a variable <code>myAge</code> and set it equal to your age.</li>
			<li>Define a variable <code>message</code> and set it equal to a string that tells the world how old you are. For example, if you are 22 then the string should say "Today I am 22!". (Hint: you might have to use <code>${myAge}</code> somewhere in your code.)</li>
			<li>Print the <code>message</code> variable to the output using the <code>print()</code> command.</li>
		</ol>
		<codeedit editorID="js/data-types/ageActivity"></codeedit>

		<p class="title">Activity: Favorite Numbers</p>
		<p>
			In the editor below do the following:
		</p>
		<ol>
			<li>Define a variable <code>favoriteNumbers</code> and set it equal to an array of your 5 favorite numbers.</li>
			<li>Print the first element in the <code>favoriteNumbers</code> array to the output using the <code>print()</code> command.</li>
			<li>Print the last element in the <code>favoriteNumbers</code> array to the output using the <code>print()</code> command.</li>
		</ol>
		<codeedit editorID="js/data-types/favoriteNumberActivity"></codeedit>

	</div>
</template>

<script>
	import codeedit from '~/components/codeedit.vue';

	export default {
		components: {codeedit},
		
		data() {
			return {
				title: "JavaScript Data Types"
			}
		},

		head() {
			return {
				title: this.title
			}
		},

		mounted() {
			this.$store.commit('changeTitle', this.title);
		}
	}

</script>