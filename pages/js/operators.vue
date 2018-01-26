<template>
	<div>
		
		<p class="title">What are operators and methods?</p>
		<p>
			<em>Operators</em> are essentially tools for taking one or more values, and then producing a new value from them. For example, addition is an operator. Notice that \( 5 + 3 = 8 \). The addition "operator" takes 5 and 3 and then returns 8. In programming, there are <em>many</em> useful operators. We will be covering many different operators on this page.
		</p>
		<p>
			<em>Methods</em> are kind of like operators, but are actions that various data types can perform on themselves. For example, suppose you have a string "hello world" and you want it to have all capital letters. Strings have a method that allow you to do this very easily.
		</p>

		<p class="title">Number Operators</p>
		<p>
			JavaScript has a handful of operators for numbers, and these operators are similar to those that you are used to using in math. For example, JavaScript has addition (+), subtraction (&minus;), multiplication (*) and division (/) operators for taking two numbers and turning them into one. These four operators are shown below.
		</p>
		<codeedit height="130px" editorID="js/operators/numberOperators">var x = 3, y = 5, z = 7;

print(x + y);
print(x - z);
print(y * z);
print(z/x);</codeedit>
		<p>
			Along with the usual arithmetic operators, JavaScript also provides a few extra operators on numbers that are often very useful. The <em>modulus</em> (or remainder) operator, denoted by <code>%</code> returns the remainder of one number when it is divided by another. For example, <code>5 % 2</code> returns a value of 1, because when you divide 5 by 2 you get 2 with a remainder of 1. So <code>%</code> gives a remainder. The editor below shows this idea.
		</p>
		<codeedit height="100px" editorID="js/operators/modulus">print(5 % 2);
print(5 % 3);
print(7 % 4);
print(10.2 % 2);</codeedit>
		<p>
			Notice that in line (4) above we get a weird looking value. The value <em>should</em> be 0.2, but the way JavaScript handles math sometimes returns values that are <em>very slightly</em> different than what it should be. 
		</p>
		<p>
			JavaScript provides <em>increment</em> and <em>decrement</em> operators, which increase or decrease a number or variable by 1. For example, if we have a variable <code>x</code> then <code>x++</code> will increase the value of <code>x</code> by 1. On the other hand, <code>x--</code> will decrease the value of <code>x</code> by 1. The editor below shows this.
		</p>
		<codeedit height="170px" editorID="js/operators/incrementOperator">var x = 5;
print(x);

x++;
print(x);

x--;
x--;
print(x);</codeedit>

		
		<p class="title">String Operators and Methods</p>
		<p>
			Like numbers, JavaScript can transform multiple strings into a single new string. The most common use for this is "concatenating" two strings, which is essentially just glueing together the two strings. If we have the string <code>"Hello, "</code> and <code>"world!"</code> we can "glue" them together using string concatenation, which is denoted by <code>+</code>. So <code>"Hello, " + "world!"</code> will produce <code>"Hello, world!"</code>. The editor below shows this idea. Try it out!
		</p>
		<codeedit height="90px" editorID="js/operators/stringConcatenation">var string1 = "Hello, ";
var string2 = "world!";

print(string1 + string2);</codeedit>
		<p>
			Strings also have some "attributes" that we can access. For example, if we want to know the length of a string, we can access the "length" attribute of the string. To do that, we add <code>.length</code> to the end of the string. For example, <code>"Mayonaise!".length</code> will tell us how many characters are in <code>"Mayonaise!"</code>. The editor below shows this.
		</p>
		<codeedit height="120px" editorID="js/operators/stringLength">print("Mayonaise!".length);

var yourName = "Grant Sander";
print("Your name has " + yourName.length + " characters.");</codeedit>
		<p>
			Along with accessing some attributes of strings, we can also use "string method". These are just operations that a string can perform on itself. These methods are best described by looking at a couple examples.
		</p>
		<codeedit height="120px" editorID="js/operators/stringMethod">var yourName = "Grant Sander";

print( yourName.toLowerCase() );
print( yourName.toUpperCase() );
print( yourName.charAt(0) );</codeedit>
		<p>
			In line (3) above, we use the <code>.toLowerCase()</code> method of <code>yourName</code> to turn all of the characters in <code>yourName</code> to lower-case. Similarly for <code>.toUpperCase()</code>. The <code>.charAt()</code> method returns the character at a specified "index" of the string. So <code>yourName.charAt(0)</code> returns the character at index 0, which is the first character in the string. (Recall that in JavaScript, indices start at 0!)
		</p>


		<p class="title">Array Methods</p>
		<p>
			Recall that arrays are like ordered sequences of data. Arrays have <em>many</em> useful attributes and methods, but we will only look at a few of them here. One important attribute of arrays is the <code>.length</code> attribute, which tells us how many elements are in the array. For example, <code>[1,3,5].length</code> will return 3 since there are three elements in that array.
		</p>
		<p>
			Recall that we can change and add elements to an array using square brackets (such as <code>ingredients[1] = "Turkey"</code>). JavaScript also provides a handful of methods for adding and removing elements to and from an array. The <code>.push()</code> methods adds an element to the end of an array, and <code>.unshift()</code> adds an element to the beginning of an array. These two method are shown below.
		</p>
		<codeedit height="190px" editorID="js/operators/arrayPushUnshift">var a = [1,2,3,4];
print(a);

a.push(5);
print(a);

a.unshift(0);
print(a);

print(a.length);</codeedit>

		
		<p class="title">Comparison Operators</p>
		<p>
			JavaScript offers a handful of <em>comparison operators</em>, which compare two values and then returns either <code>true</code> or <code>false</code>. As an example, <code>5 &gt; 3</code> uses the <code>&gt;</code> operator and returns <code>true</code>, because 5 is indeed greater than 3. The following table shows JavaScript's comparison operators.
		</p>
		<table class="table">
			<tbody>
				<tr>
					<th>Operator</th> <th>Description</th> <th>Example</th>
				</tr>
				<tr>
					<td><code>==</code></td> <td>Equal to</td> <td><code>5 == 5</code> returns true but <code>5 == 4</code> returns false</td>
				</tr>
				<tr>
					<td><code>!=</code></td> <td>Not equal to</td> <td><code>5 != 4</code> returns true but <code>5 != 5</code> returns false</td>
				</tr>
				<tr>
					<td><code>&gt;</code></td> <td>Greater than</td> <td><code>5 &gt; 3</code> returns true</td>
				</tr>
				<tr>
					<td><code>&lt;</code></td> <td>Less than</td> <td><code>5 &lt; 3</code> returns false</td>
				</tr>
				<tr>
					<td><code>&gt;=</code></td> <td>Greater than or equal to</td> <td><code>4 &gt;= 4</code> returns true</td>
				</tr>
				<tr>
					<td><code>&lt;=</code></td> <td>Less than or equal to</td> <td><code>4 &lt;= 5</code> returns true</td>
				</tr>
			</tbody>
		</table>
		<p>
			The comparison operators are very important in coding, especially when we discuss "logic and flow". The editor below shows how we can use the operators above.					
		</p>
		<codeedit height="140px" editorID="js/operators/comparisonOperators">print("John" == "John");
print("John" != 5);
print(5 &gt; 3);
print(5 &lt; 3);
print(4 &gt;= 4);
print(3 &lt;= 5);</codeedit>


		<p class="title">Logical Operators</p>
		<p>
			In programming, <em>logical operators</em> are operators that act like arithmetic for booleans (true/false values). As an example, suppose that a child must be at least 8 years old <strong>and</strong> at least 57 inches tall to ride in a car without a booster seat. In this scenario, the "and" acts as a logical operator. To represent "and" in JavaScript, we use the notation <code>&amp;&amp;</code>. The editor below shows this scenario - make sure you understand each line!
		</p>
		<codeedit height="140px" editorID="js/operators/logicalAnd">var age = 9, height = 55.5;

print(age &gt;= 8);
print(height &gt; 57);

print( (age &gt;= 8) &amp;&amp; (height &gt;= 57) );</codeedit>
		<p>
			In line (6) above, <code>(age &gt;= 8)</code> and <code>(height &gt;= 57)</code> both have a boolean value. <code>(age &gt;= 8)</code> is true, while <code>(height &gt;= 57)</code> is false - and therefore <code>(age &gt;= 8) &amp;&amp; (height &gt;= 57)</code> is false. 
		</p>
		<p>
			On the other hand, if we were to say that a child must be at least 8 years old <strong>or</strong> at least 57 inches tall to ride in a car without a booster seat then we could use the "or" logical operator, denoted as <code>||</code>. The editor below shows this.
		</p>
		<codeedit height="140px" editorID="js/operators/logicalOr">var age = 9, height = 55.5;

print(age &gt;= 8);
print(height &gt; 57);

print( (age &gt;= 8) || (height &gt;= 57) );</codeedit>
		<p>
			In the editor above, <code>(age &gt;= 8) || (height &gt;= 57)</code> is true because at least one of the values is true [the age is greater than 8]. The "and" and "or" operators are useful whenever we want to make multiple comparisons.
		</p>
		<p>
			There is a third logical operator, called the "negation" or "not" operator. This operator, denoted by <code>!</code>, just returns the <em>opposite</em> of a boolean value. As an example, if <code>b = true</code> then <code>!b</code> is false, and if <code>b = false</code> then <code>!b</code> is true. The editor below shows how one might use the negation operator.
		</p>
		<codeedit height="150px" editorID="js/operators/logicalNot">var x = 5, y = 6;

print( x == y );
print( !(x == y) );

print( x &lt; y );
print( !(x &lt; y) );</codeedit>


		<p class="activities-title">Activities</p>

		<p class="title">Activity: Number Operators</p>
		<p>
			The editor below has 4 variables defined. <em>Without changing these variable values</em>, use five different number operators that will produce a value of 4. The first one is done for you.
		</p>
		<codeedit height="200px" editorID="js/operators/numberOperatorsActivity">var a = 2, b = 4, c = 8, d = 12;

print(a + a);</codeedit>
		
		<p class="title">Activity: Using String Operators</p>
		<p>
			The editor below has 3 strings variables defined. <em>Without changing these variables</em>, use string operators and methods to print the following lines:
		</p>
		<ol>
			<li>"Hello World!"</li>
			<li>"HELLO World!"</li>
			<li>"hello world!"</li>
			<li>"W"</li>
		</ol>
		<p>
			The first one is done for you. Pay attention to the capitalization!
		</p>
		<codeedit height="220px" editorID="js/operators/stringOperatorsActivity">var s1 = "Hello",
s2 = " ",
s3 = "World!";

print(s1 + s2 + s3);</codeedit>
		
		<p class="title">Activity: Creating an Array with Methods</p>
		<p>
			The editor below defines a variable <code>a</code> that holds an empty array. Use the <code>.push()</code> and <code>.unshift()</code> methods to make <code>a</code> have a value of <code>[1,3,5,7]</code>.
		</p>
		<codeedit height="220px" editorID="js/operators/arrayPushActivity">var a = [];</codeedit>

		<p class="title">Activity: Making Comparisons</p>
		<p>
			The editor below defines 3 variables. <em>Without changing these variables</em>, create a "true" comparison using these variables, and each of the following operators: <code>==, !=, &lt;, &gt;, &lt;=, &gt;=</code>. That is, for each operator, use <code>a, b, c</code> to create a true statement. The first one is done for you.
		</p>
		<codeedit height="220px" editorID="js/operators/comparisonsActivity">var a = 7, b = 4, c = 7;

print( a == c );</codeedit>


	</div>
</template>

<script>
	import codeedit from '~/components/codeedit.vue';

	export default {
		components: {codeedit},
		
		data() {
			return {
				title: "JavaScript Operators and Methods"
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
		}
	}

</script>