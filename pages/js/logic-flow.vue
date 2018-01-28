<template>
	<div>
		<p class="title">If-Else Statements</p>
		<p>
			On a <nuxt-link to="/js/operators">previous page</nuxt-link> we looked at comparison and logical operators, which return a <em>boolean</em> value (a true/false value). We can use these true/false values to dictate what our programs do.
		</p>
		<p>
			Suppose we have an <code>age</code> variable that contains the age of a person, and we want to print "You can drive!" if the person is at least 16 years old, and print "Sorry, you can't drive yet." otherwise. To do this we use a <em>conditional statement</em>, also referred to as an <em>if-else</em> statement. The code below shows this.
		</p>
		<codeedit editorID="js/logic-flow/age-drive">var age = 15;

if (age >= 16) {
	print("You can drive!");
} else {
	print("Sorry, you can't drive yet.");
}</codeedit>
		<p>
			In the code above, try changing the value of <code>age</code> to 18 and running the code! In this code, we used the <code>if</code> statement. The <code>if</code> statement takes a condition within parentheses (such as <code>age &gt;= 16</code>) and then executes the following code block if that condition is true. If the condition is false, then the code within the <code>else</code> block will run. Like functions, we use curly braces, { and }, to indicate the blocks of code we want to run.
		</p>
		<hr>
		<p>
			Let's look at another example of using if-else statements. Let's define a function named <code>greaterThanTen</code> that will look at a number, and tell us if it's greater than 10 or not. Check out the code below.
		</p>
		<codeedit editorID="js/logic-flow/greater-ten">function greaterThanTen(x) {
	if (x > 10) {
		print(`${x} is greater than 10.`);
	} else {
		print(`${x} is NOT greater than 10.`);
	}
	return;
}

greaterThanTen(8);
greaterThanTen(12);</codeedit>

		<p class="title">The "Switch" Statement</p>
		<p>
			We can use multiple if/else statements, but this can get messy. Another option is to use a <code>switch</code> statement, which checks a value and then runs a block of code based on that value. This will make the most sense with an example. Suppose we want to take the name of a coin, and then print out the value of that coin based on its name. The code below shows this.
		</p>
		<codeedit editorID="js/logic-flow/switch-coin">var coinName = "nickel";

switch (coinName) {
	case "penny":
		print("0.01");
		break;
	case "nickel":
		print("0.05");
		break;
	case "dime":
		print("0.10");
		break;
	case "quarter":
		print("0.25");
		break;
}</codeedit>
		<p>
			In the code above, change <code>coinName</code> to "quarter" and then run the code. In this switch statement, we use the syntax <code>switch (coinName)</code> to indicate that our switch statement will look at the <code>coinName</code> variable and use that value to dictate what to do. Each "case" is indicated with the <code>case</code> keyword. When you land in one of these cases, the program will run all code after that until it hits a <code>break</code> keyword, so we generally add <code>break</code> to the end of each of our cases.
		</p>
		<p>
			In the code above, change <code>coinName</code> to "nickle" (notice the spelling!). The switch statement doesn't recognize this value of <code>coinName</code> so it won't execute anything! Notice that the output is empty. To handle the "leftovers" we use a <code>default</code> case, which will catch anything that doesn't fall into the other cases. Let's adjust the previous code to use a <code>default</code> case.
		</p>
		<codeedit editorID="js/logic-flow/switch-coin-default">var coinName = "nickle";

switch (coinName) {
	case "penny":
		print("0.01");
		break;
	case "nickel":
		print("0.05");
		break;
	case "dime":
		print("0.10");
		break;
	case "quarter":
		print("0.25");
		break;
	default:
		print("I don't recognize that coin name.");
		break;
}</codeedit>
		<p>
			In the code above, the <code>default</code> case will pick up anything that isn't "penny", "nickel", "dime", or "quarter".
		</p>

		<p class="activities-title">Activities</p>
		<p class="title">Activity: Height for a Ride</p>
		<p>
			Suppose a ride at an amusement park has a height requirement. To ride the ride, you must be at least 36 inches tall. Use the editor below to do the following:
		</p>
		<ol>
			<li>Define a variable <code>height</code> that contains a number that represents a person's height in inches.</li>
			<li>If the person is tall enough to ride the ride, print "Hop on!".</li>
			<li>If the person is <em>not</em> tall enough to ride the ride, print "Sorry, you aren't tall enough.".</li>
		</ol>
		<codeedit editorID="js/logic-flow/activity-ride-height">print("Your code here.");</codeedit>

		<p class="title">Activity: Printing the Day of the Week</p>
		<p>
			JavaScript can tell what time/day it is. In the code below, the first line is getting the day of the week <em>in number form</em>, where 0 is Sunday, 1 is Monday, 2 is Tuesday, and so on. Use the code editor below to print the name of the day of the week based on the day number <code>n</code>. That is, if <code>n = 1</code> you should print "Monday".
		</p>
		<p>
			Once you've done this, change the value of <code>n</code> to various values between 0 and 6 and make sure it works as expected.
		</p>
		<codeedit editorID="js/logic-flow/activity-day-of-week">var n = new Date().getDay();

print(n);
print("Your code here.");</codeedit>



	</div>
</template>

<script>
	import codeedit from '~/components/codeedit.vue';

	export default {
		components: {codeedit},
		
		data() {
			return {
				title: "Logic and Flow"
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